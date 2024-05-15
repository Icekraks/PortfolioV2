export const structure = (S) => {
  return S.list()
    .title('content')
    .items([
      S.listItem().title('Home Page').child(),
      S.listItem().title('Pages').child(S.documentTypeList('page').title('Pages')),
      S.listItem().title('Navigation').child(S.documentTypeList('navigation').title('Navigation')),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .id('settingMenus')
            .items([
              S.listItem()
                .title('Menu Settings')
                .child(
                  S.document()
                    .title('Menu Settings')
                    .schemaType('settingsMenus')
                    .documentId('settingsMenus'),
                ),
            ]),
        ),
    ])
}
