require 'jekyll_asset_pipeline'

module JekyllAssetPipeline

  # Pre process SCSS files with compass
  class SassConverter < JekyllAssetPipeline::Converter
    require 'compass'

    Compass.configuration.sass_dir = 'src/_assets/css'
    Sass.load_paths << 'src/_components/foundation/scss'

    Compass.sass_engine_options[:load_paths].each do |path|
      Sass.load_paths << path
    end

    def self.filetype
      '.scss'
    end

    def convert
      Sass::Engine.new(@content, syntax: :scss).render
    end
  end

  # Compress JS files with YUI compressor
  class JavaScriptCompressor < JekyllAssetPipeline::Compressor
    require 'yui/compressor'

    def self.filetype
      '.js'
    end

    def compress
      return YUI::JavaScriptCompressor.new(munge: true).compress(@content)
    end
  end

  # Compress CSS files with YUI compressor
  class CssCompressor < JekyllAssetPipeline::Compressor
    require 'yui/compressor'

    def self.filetype
      '.css'
    end

    def compress
      YUI::CssCompressor.new.compress(@content)
    end
  end

  # A template to return the path of the processed asset file instead of the html tag
  # This allows me to load the CSS with JavaScript after the document is loaded
  class CssFileNameTemplate < JekyllAssetPipeline::Template
    def self.filetype
      '.css'
    end

    def self.priority
      -5
    end

    def html
      "/#{@path}/#{@filename}"
    end
  end

  # A template to add async property to the JavaScript tag
  class JavaScriptAsyncTemplate < JekyllAssetPipeline::Template
    def self.filetype
      '.js'
    end

    def self.priority
      -5
    end

    def html
      #"<script src='/#{@path}/#{@filename}' type='text/javascript' async></script>\n"
      "/#{@path}/#{@filename}"
    end
  end

end
