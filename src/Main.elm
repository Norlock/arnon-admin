module Main exposing (..)

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
    ( { name = "" }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangedUrl _ ->
            ( model, Cmd.none )

        ClickedLink _ ->
            ( model, Cmd.none )


view : Model -> Browser.Document Msg
view model =
    { title = "Arnon admin"
    , body = [ body model ]
    }


body : Model -> Html Msg
body model =
    div [ class "container" ]
        [ navbar model
        , div [] [ text "products" ]
        ]


navbar : Model -> Html Msg
navbar _ =
    div [ class "navbar" ]
        [ ul [ class "nav-list" ]
            [ li []
                [ a
                    [ href "/", class "nav-link" ]
                    [ text "Home" ]
                , a
                    [ href "/products", class "nav-link" ]
                    [ text "Products" ]
                ]
            ]
        ]



-- Subscriptions


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
