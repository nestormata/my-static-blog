require 'i18n'


# Create folder "_locales" and put some locale file from https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale
module Jekyll
  module I18nFilter
    # Example:
    #   {{ post.date | localize: "%d.%m.%Y" }}
    #   {{ post.date | localize: ":short" }}
    def localize(input, lang, format=nil)
      load_translations
      format = (format =~ /^:(\w+)/) ? $1.to_sym : format
      if lang == 'es' then
        I18n.locale = :es
      else
        I18n.locale = :en
      end
      I18n.l input, :format => format
    end

    def load_translations
      unless I18n::backend.instance_variable_get(:@translations)
        I18n.backend.load_translations Dir[File.join(File.dirname(__FILE__),'../_locales/*.yml')]
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::I18nFilter)
