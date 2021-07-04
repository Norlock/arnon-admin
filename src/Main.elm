module Main exposing (..)

import Api
import Browser
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Types exposing (..)
import Url


main =
    Browser.application
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        , onUrlChange = ChangedUrl
        , onUrlRequest = ClickedLink
        }


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init _ _ _ =
    ( { name = ""
      , products = []
      }
    , Api.fetchProductList
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangedUrl _ ->
            ( model, Cmd.none )

        ClickedLink _ ->
            ( model, Cmd.none )

        FetchedProductList result ->
            case result of
                Ok products ->
                    ( { model | products = products }, Cmd.none )

                Err _ ->
                    ( model, Cmd.none )


setProductList : Model -> List Product -> Model
setProductList model products =
    { model | products = products }


view : Model -> Browser.Document Msg
view model =
    { title = "Arnon admin"
    , body = [ body model ]
    }


body : Model -> Html Msg
body model =
    div [ class "container" ]
        [ navbar model
        , div [ class "content" ] [ productListView model ]
        ]


navbar : Model -> Html Msg
navbar _ =
    div [ class "navbar" ]
        [ ul [ class "nav-list" ]
            [ li []
                [ a
                    [ href "/", class "nav-link" ]
                    [ text "Home" ]
                ]
            , li []
                [ a
                    [ href "/products", class "nav-link" ]
                    [ text "Products" ]
                ]
            ]
        ]


productListView : Model -> Html Msg
productListView model =
    model.products
        |> List.map (\product -> productView product)
        |> div []


productView : Product -> Html Msg
productView product =
    div [ class "product-container" ]
        [ span [ class "title" ] [ text product.title ]
        , span [ class "description-short" ] [ text product.descriptionShort ]
        , span [ class "description-long" ] [ text product.descriptionLong ]
        , span [ class "price" ] [ text (String.fromFloat product.price) ]
        , span [ class "stock" ] [ text (String.fromInt product.stock) ]
        , span [ class "brand" ] [ text product.brand ]
        , span [ class "color" ] [ text product.color ]
        , span [ class "size" ] [ text product.size ]
        ]



-- Subscriptions


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
