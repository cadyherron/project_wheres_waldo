class TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      respond_to do |format|
        format.html
        format.json { render json: @tag, status: :created }
      end
    else
      respond_to do |format|
        format.html
        format.json { redirect_to photo_path(@tag.photo_id) }
      end
    end
  end


  private

  def tag_params
    params.require(:tag).permit(:character_id, :photo_id, :x, :y)
  end

end
