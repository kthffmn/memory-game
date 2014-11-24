class Programmers

  def self.run
    coders = YAML.load_file('./lib/programmers.yml').each_with_object([]) do |k,a| 
      a << {:pic = slugify(k), :name => k}
    end
    coders
  end

  def slugify(name)
    name.downcase.gsub(" ", "-")
  end
  
end