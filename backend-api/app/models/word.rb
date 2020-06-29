class Word < ApplicationRecord
  belongs_to :difficulty

  #Words need to be shuffled every game so the order is not the same
  
end
