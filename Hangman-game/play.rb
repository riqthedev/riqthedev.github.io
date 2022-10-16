class Hangman

    def initialize
        @letters = ('a'..'z').to_a
        @word = words.sample
    end

    def words
[
    ["basketball", "My Favorite Sport"],
    ["Nyriq", "My Name"],
    ["Age", "Years ive been living"],
    ["leslie", "My Girlfriend"]
]
end

 def make_guess
   puts "enter a letter"
   guess = gets.chomp
   # if letter is not part remove from letters array
   good_guess = @word.first.include? guess

   if good_guess
     puts "good guess"
   else
     puts "No sorry"
 end




def print_teaser
  word_teaser = ""
  @word.first.size.times do
      word_teaser += "_"
  end
end

    def begin
        # ask user for a letter
        puts "New game started.. your is #{@word.first.size} characters long"

        print_teaser
        puts "Clue: #{@word.last}"

    end


end

game = Hangman.new

game.begin
