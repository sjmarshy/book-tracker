(ns book-tracker.appstate
  (:require-macros  [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [book-tracker.localstorage :as store]
            [cljs.core.async :refer  [put! chan <! timeout]]))

(defonce app-state (atom {:books []
                          :delete-books (chan)}))

(def save-key "sjmarshy::booktracker")

(defn save-state [app]
  (.log js/console "Saving")
  (store/set-local save-key (.stringify js/JSON (clj->js (:books app)))))

(defn add-book [app title]
  (om/transact! app :books #(conj (:books app) {:title title})))

(defn load-state [app]
  (.log js/console "loading state...")
  (om/transact! app :books #(js->clj (.parse js/JSON (store/get-local save-key)) :keywordize-keys true))
  (.log js/console "state loaded..."))

(defn app-loop [app]
  (go (loop []
        (let  [book (<! (:delete-books app))]
          (om/transact! app :books
                        (fn [xs]
                          (vec (remove #(= book %) xs)))))
        (recur))))
