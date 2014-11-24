class Programmers
  attr_reader :programmers

  def initialize
    @programmers = get_programmers
  end

  def get_programmers
    coders = YAML.load_file('./lib/programmers.yml').each_with_object([]) do |k,a| 
      a << {:pic = slugify(k), :name => k}
    end
    coders
  end

  def slugify(name)
    name.downcase.gsub(" ", "-")
  end
  
end