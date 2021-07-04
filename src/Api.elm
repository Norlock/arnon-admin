module Api exposing (..)

import Http
import Json.Decode as Decode
import Json.Decode.Pipeline exposing (..)
import Types exposing (..)


fetchProductList : Cmd Msg
fetchProductList =
    Http.get
        { url = "http://localhost:8000/products"
        , expect = Http.expectJson FetchedProductList productListDecoder
        }


productDecoder : Decode.Decoder Product
productDecoder =
    Decode.succeed Product
        |> required "id" Decode.int
        |> required "title" Decode.string
        |> required "description_short" Decode.string
        |> required "description_long" Decode.string
        |> required "price" Decode.float
        |> required "stock" Decode.int
        |> required "brand" Decode.string
        |> required "color" Decode.string
        |> required "size" Decode.string


productListDecoder : Decode.Decoder (List Product)
productListDecoder =
    Decode.list productDecoder
