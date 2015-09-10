(ns book-tracker.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)



(defonce app-state (atom {:books [
                    {:title "Test Book"}
                    {:title "Test Book2"}
                    {:title "Test Book3"}
                    {:title "Test Book4"}]}))


(defn add-book [app title]
 (om/transact! app :books #(conj (:books app) {:title title})))



(defn book-title [book]
  (dom/li nil (:title book)))

(defn book-titles [books]
  (apply dom/ul nil
    (map book-title books)))

(defn add-book-form [app]
  (dom/div nil
    (dom/input #js{:type "input"})
    (dom/button #js{:onClick #(.log js/console "hi")} "add book")))


(defn main []
  (.log js/console "hi")
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div nil
          (add-book-form app)
          (book-titles  (:books app))))))
    app-state
    {:target (. js/document (getElementById "app"))}))

