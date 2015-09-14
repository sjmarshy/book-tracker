(ns book-tracker.book.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put!]]
            [book-tracker.appstate :as s]))

(def text-color "#e4f1fe")
(def font-size "18px")

(def book-styles #js {:listStyle "none"
                      :display "flex"
                      :justifyContent "space-between"
                      :alignItems "center"
                      :clear "both"
                      :borderBottom "1px solid #2c3e50"
                      :width "100vw"
                      :height "100px"
                      :backgroundColor "#22313f"
                      :color text-color
                      :padding "0 0 0 15px"})

(def book-button-styles #js {;aesthetics 
                             :border "none"
                             :backgroundColor "#19B5FE"

                             ;;layout
                             :height "100px"
                             :marginLeft "10px"
                             :width "100px"
                             :padding "5px"

                             ;; text
                             :color text-color
                             :fontSize font-size
                             :cursor "pointer"})

(def book-title-styles #js {:display "inline-block"
                            :fontSize font-size
                            :fontFamily "sans-serif"})


;; book components
(defn book [{:keys [del book]} owner]
  (reify
    om/IRender
    (render [_]
      (dom/li #js {:style book-styles} 
              (dom/span #js {:style book-title-styles} (:title book))
              (dom/button #js 
                          {:style book-button-styles
                           :onClick (fn [e] (put! del book))}
                          "x")))))

(def books-styles #js {:margin 0
                       :display "flex"
                       :flexWrap "wrap"
                       :width "100vw"
                       :padding "0px"})

(defn books [{:keys [books del]}]
  (apply dom/ul #js {:style books-styles}
         (om/build-all book
                       (map (fn [x] {:del del
                                     :book x}) books))))

;; book form
(defn handle-book-form [e owner]
  (om/set-state! owner :title (.. e -target -value)))

(defn clear-book-form [owner]
  (om/set-state! owner :title ""))

(defn toggle-display-book-form [owner state]
  (om/set-state! owner :display  (not (:display state))))

(def add-book-button-styles #js {:width "100vw"
                                 :height "50px"
                                 :display "flex"
                                 :justifyContent "center"
                                 :alignItems "center"
                                 :backgroundColor "#2ecc71"
                                 :color text-color
                                 :fontSize font-size
                                 :fontFamily "sans-serif"
                                 :cursor "pointer"})
(defn add-book-form [data owner]
  (reify ; something I didn't know until recently, reify means 'to make real'

    om/IInitState
    (init-state [_]
      {:title ""
       :display false})

    om/IRenderState
    (render-state [_ state]
      (let [display (:display state)]
        (if display
        (dom/div #js {:style #js {:padding "5px"}}
                 (dom/button  #js {:onClick #(toggle-display-book-form owner state)} "x")
                 (dom/h4 nil "Add Books")
                 (dom/input 
                   #js{:type "input" 
                       :style #js {:marginRight "5px"}
                       :value (:title state) 
                       :onChange #(handle-book-form % owner)})
                 (dom/button 
                   #js{:onClick (fn []
                                  (s/add-book data (:title state))
                                  (clear-book-form owner))}
                   "add book"))
          (dom/div #js {:style add-book-button-styles
                        :onClick #(toggle-display-book-form owner state)} "Add Book"))))))
