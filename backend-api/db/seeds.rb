# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Difficulty.create(level:"Easy")
Difficulty.create(level:"Medium")
Difficulty.create(level:"Hard")

easy = Difficulty.all.find_by(level:"Easy")
medium = Difficulty.all.find_by(level:"Medium")
hard = Difficulty.all.find_by(level:"Hard")

easy.words.create(element:"acid")
easy.words.create(element:"easy")
easy.words.create(element:"army")
easy.words.create(element:"beer")
easy.words.create(element:"bone")
easy.words.create(element:"bath")
easy.words.create(element:"home")
easy.words.create(element:"hire")
easy.words.create(element:"heat")
easy.words.create(element:"iron")
easy.words.create(element:"just")
easy.words.create(element:"kind")
easy.words.create(element:"golf")
easy.words.create(element:"gray")
easy.words.create(element:"safe")
easy.words.create(element:"rush")
easy.words.create(element:"said")
easy.words.create(element:"seed")
easy.words.create(element:"rank")
easy.words.create(element:"rock")
easy.words.create(element:"that")

medium.words.create(element:"adult")
medium.words.create(element:"agent")
medium.words.create(element:"asset")
medium.words.create(element:"based")
medium.words.create(element:"beach")
medium.words.create(element:"blade")
medium.words.create(element:"board")
medium.words.create(element:"breif")
medium.words.create(element:"cause")
medium.words.create(element:"yield")
medium.words.create(element:"which")
medium.words.create(element:"forget")
medium.words.create(element:"garage")
medium.words.create(element:"famous")
medium.words.create(element:"health")
medium.words.create(element:"guests")
medium.words.create(element:"hoping")
medium.words.create(element:"visual")
medium.words.create(element:"worked")
medium.words.create(element:"though")
medium.words.create(element:"summer")

hard.words.create(element:"alleged")
hard.words.create(element:"because")
hard.words.create(element:"capable")
hard.words.create(element:"dynamic")
hard.words.create(element:"essence")
hard.words.create(element:"foreign")
hard.words.create(element:"genuine")
hard.words.create(element:"heading")
hard.words.create(element:"journal")
hard.words.create(element:"kingdom")
hard.words.create(element:"library")
hard.words.create(element:"mystery")
hard.words.create(element:"nervous")
hard.words.create(element:"obvious")
hard.words.create(element:"pacific")
hard.words.create(element:"quality")
hard.words.create(element:"resolve")
hard.words.create(element:"segment")
hard.words.create(element:"theatre")
hard.words.create(element:"various")
hard.words.create(element:"whereas")


Score.create(display_name:"biagio", number:1)
Score.create(display_name:"chris", number:4)
Score.create(display_name:"sean", number:4)
Score.create(display_name:"alex", number:5)
Score.create(display_name:"frank", number:12)
Score.create(display_name:"sal", number:8)
Score.create(display_name:"ang", number:7)
Score.create(display_name:"carmela", number:11)
Score.create(display_name:"mike", number:17)
Score.create(display_name:"brian", number:15)
Score.create(display_name:"anthony", number:4)


















