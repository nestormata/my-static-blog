require 'htmlcompressor'

module Jekyll
  module Compressor
    def exclude?(dest, dest_path)
      res = false
      file_name = dest_path.slice(dest.length+1..dest_path.length)
      exclude = @site.config['jekyll-press'] && @site.config['jekyll-press']['exclude']
      if exclude
        if exclude.is_a? String
          exclude = [exclude]
        end
        exclude.each do |e|
          if e == file_name || File.fnmatch(e, file_name)
            res = true
            break
          end
        end
      end
      res
    end

    def output_file(dest, content)
      FileUtils.mkdir_p(File.dirname(dest))
      File.open(dest, 'w') do |f|
        f.write(content)
      end
    end

    def output_html(path, content)
      #output_file(path, HtmlPress.press(content, @site.config['jekyll-press'] && @site.config['jekyll-press']['html_options'] || {}))
      compressor = HtmlCompressor::Compressor.new
      output_file(path, compressor.compress(content))
    end

  end

  class Post
    include Compressor

    def write(dest)
      dest_path = destination(dest)
      output_html(dest_path, output)
    end
  end

  class Page
    include Compressor

    def write(dest)
      dest_path = destination(dest)
      if exclude?(dest, dest_path)
        output_file(dest_path, output)
      else
        output_html(dest_path, output)
      end
    end
  end

end
