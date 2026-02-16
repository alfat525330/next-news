self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/news/(?<nxtPslug>[^/]+?)(?:/.*)?"
          }
        ],
        "source": "/news/:nxtPslug/image",
        "destination": "/news/:nxtPslug/(.)image"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/news/(?<nxtPslug>[^/]+?)(?:/.*)?"
          }
        ],
        "source": "/news/:nxtPslug/image",
        "destination": "/news/:nxtPslug/(.)image"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/news/(?<nxtPslug>[^/]+?)(?:/.*)?"
          }
        ],
        "source": "/news/:nxtPslug/image",
        "destination": "/news/:nxtPslug/(.)image"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/news/(?<nxtPslug>[^/]+?)(?:/.*)?"
          }
        ],
        "source": "/news/:nxtPslug/image",
        "destination": "/news/:nxtPslug/(.)image"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/news/(?<nxtPslug>[^/]+?)(?:/.*)?"
          }
        ],
        "source": "/news/:nxtPslug/image",
        "destination": "/news/:nxtPslug/(.)image"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/news/(?<nxtPslug>[^/]+?)(?:/.*)?"
          }
        ],
        "source": "/news/:nxtPslug/image",
        "destination": "/news/:nxtPslug/(.)image"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/news/(?<nxtPslug>[^/]+?)(?:/.*)?"
          }
        ],
        "source": "/news/:nxtPslug/image",
        "destination": "/news/:nxtPslug/(.)image"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()