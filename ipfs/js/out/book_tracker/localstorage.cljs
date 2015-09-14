(ns book-tracker.localstorage)

(def local-storage (.-localStorage js/window))

(defn set-local [key val]
  (.setItem local-storage key val))

(defn get-local [key]
  (.getItem local-storage key))
