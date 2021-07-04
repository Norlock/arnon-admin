module Types exposing (..)

import Browser exposing (UrlRequest)
import Url exposing (Url)


type alias Model =
    { name : String
    }


type alias ErrorMsg =
    { title : String
    , body : String
    }


type Msg
    = ChangedUrl Url
    | ClickedLink UrlRequest
