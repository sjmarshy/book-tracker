(ns book-tracker.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [book-tracker.book.components :as b]
            [book-tracker.appstate :as s]))

(enable-console-print!)

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div nil
                   (om/build b/add-book-form app)
                   (b/book-titles  (:books app))))))
    s/app-state
    {:target (. js/document (getElementById "app"))}))

