Rails.application.routes.draw do
  
  root 'photos#show'

  resources :photos
  resources :tags

end
