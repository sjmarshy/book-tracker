(ns book-tracker.core
  (:require-macros  [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [book-tracker.book.components :as b]
            [book-tracker.appstate :as s]
            [cljs.core.async :refer  [put! chan <! timeout]]))

(enable-console-print!)

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IWillMount
        (will-mount [_]
          (.setTimeout js/window 
                       (fn [] (s/load-state (om/get-props owner)))
                       (go (loop []
                             (let [_ (<! (timeout 5000))]
                               (s/save-state (om/get-props owner)))
                             (recur)))
                       500)
          (s/app-loop app))
        om/IRender
        (render [_]
          (dom/div nil
                   (om/build b/add-book-form app)
                   (b/books  {:books (:books app)
                              :del (:delete-books app)})))))
    s/app-state
    {:target (. js/document (getElementById "app"))}))

