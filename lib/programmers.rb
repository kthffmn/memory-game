class Programmers

  def self.run
    coders = YAML.load_file('./lib/programmers.yml').each_with_object([]) do |name,a| 
      slugged_name = slugify(name)
      a << {slugged_name => {name: name}}
      a << {slugged_name => {img: get_image_file(name)}}
    end
    coders.shuffle
  end

  def self.get_image_file(name)
    "/images/#{slugify(name)}.jpg" 
  end

  def self.slugify(name)
    name.downcase.gsub(" ", "-")
  end
  
end