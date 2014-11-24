require_relative 'config/environment'

class App < Sinatra::Base

  get "/" do
    binding.pry
    @programmers = Programmers.run

    @i = 0
    erb :'index'
  end

end