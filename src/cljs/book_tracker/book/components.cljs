(ns book-tracker.book.components
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [book-tracker.appstate :as s]))

;; book components
(defn book-title [book]
  (dom/li nil (:title book)))

(defn book-titles [books]
  (apply dom/ul nil
         (map book-title books)))

;; book form
(defn handle-book-form [e owner]
  (om/set-state! owner :title (.. e -target -value)))

(defn clear-book-form [owner]
  (om/set-state! owner :title ""))

(defn add-book-form [data owner]
  (reify ; something I didn't know until recently, reify means 'to make real'
    om/IInitState
    (init-state [_]
      {:title ""})
    om/IRenderState
    (render-state [_ state]
      (dom/div nil
               (dom/input 
                 #js{:type "input" 
                     :value (:title state) 
                     :onChange #(handle-book-form % owner)})
               (dom/button 
                 #js{:onClick (fn []
                                (s/add-book data (:title state))
                                (clear-book-form owner))}
                 "add book")))))
