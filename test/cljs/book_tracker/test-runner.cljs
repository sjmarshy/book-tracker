(ns book_tracker.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [book_tracker.core-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'book_tracker.core-test))
    0
    1))
