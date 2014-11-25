require_relative 'config/environment'

class App < Sinatra::Base

  get "/" do
    @programmers = Programmers.run
    erb :'index'
  end

end