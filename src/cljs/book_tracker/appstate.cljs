(ns book-tracker.appstate
  (:require [om.core :as om :include-macros true]))

(defonce app-state (atom {:books [
                                  {:title "Test Book"}
                                  {:title "Test Book2"}
                                  {:title "Test Book3"}
                                  {:title "Test Book4"}]}))

(defn add-book [app title]
  (om/transact! app :books #(conj (:books app) {:title title})))
