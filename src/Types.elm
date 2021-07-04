module Types exposing (..)

import Browser exposing (UrlRequest)
import Http
import Url exposing (Url)


type alias Model =
    { name : String
    , products : List Product
    }


type alias Product =
    { id : Int
    , title : String
    , descriptionShort : String
    , descriptionLong : String
    , price : Float
    , stock : Int
    , brand : String
    , color : String
    , size : String
    }


type alias ErrorMsg =
    { title : String
    , body : String
    }


type Msg
    = ChangedUrl Url
    | ClickedLink UrlRequest
    | FetchedProductList (Result Http.Error (List Product))
