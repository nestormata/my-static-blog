require 'htmlcompressor'

# This file is to compress the site HTML files using HTML Compressor
module Jekyll
  module Compressor

    # To allow exclude files using configuration
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

    # To override the files with the compressed version
    def output_file(dest, content)
      FileUtils.mkdir_p(File.dirname(dest))
      File.open(dest, 'w') do |f|
        f.write(content)
      end
    end

    # Where the HTML actually gets compressed
    def output_html(path, content)
      compressor = HtmlCompressor::Compressor.new
      output_file(path, compressor.compress(content))
    end

  end

  # To apply the compression to Posts
  class Post
    include Compressor

    def write(dest)
      dest_path = destination(dest)
      output_html(dest_path, output)
    end
  end

  # To apply the compression to Pages (uses the exclude configuration)
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
