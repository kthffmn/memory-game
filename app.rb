require_relative 'config/environment'

class App < Sinatra::Base

  get "/" do
    @programmers = Programmers.run
    @colors = YAML.load_file('lib/colors.yml')
    @seed = rand(4)
    erb :'index'
  end

end