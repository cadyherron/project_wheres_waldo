class AddCoordsToCharacters < ActiveRecord::Migration
  def change
    add_column :characters, :xcoord, :integer
    add_column :characters, :ycoord, :integer
  end
end
