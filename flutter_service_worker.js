'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1151966164ecc3fc2fa7dd171bfe5c79",
"assets/AssetManifest.bin.json": "8b2f43d0f02654e5293afbdfd501a137",
"assets/AssetManifest.json": "b50e63a2032750014343f520c3c8263b",
"assets/assets/avatar/dog.jpg": "6e33ccb759a0d4d725d4a283d49c6ad6",
"assets/assets/avatar/ghost.jpg": "afc5c05cbbe95a5dd58d9cad485bc781",
"assets/assets/avatar/goofy.png": "529268480339363f62844815a4fce808",
"assets/assets/avatar/kachalla.png": "46057eb8c920dd9b08fd9c88d1f9c44f",
"assets/assets/avatar/ma2.png": "8a72e2441e7c7c372b2070c6b48b1180",
"assets/assets/avatar/man.png": "d1d9ac01852b02f6633838f7d677778d",
"assets/assets/avatar/man3.jpg": "6a124c702f84cbc0107bb63fd644bf13",
"assets/assets/avatar/mcnell.jpg": "10ffa4a4e414255186e12425908fc1fc",
"assets/assets/avatar/profile.png": "fbf962d2260047e6075b7a6cb38374e2",
"assets/assets/avatar/w1.png": "bf6a1317918f988ad653e2d51358cd66",
"assets/assets/avatar/w2.jpg": "4a8f917f2f4f8f5fd10fc1ae48ece343",
"assets/assets/avatar/w3.jpg": "18e24787a2da3c856f086deb60701d0c",
"assets/assets/design/after-effects.png": "460b48f19bfba4715243cb8fcd3d8279",
"assets/assets/design/back.png": "a7c5377567d598c1a38c412ce36754d6",
"assets/assets/design/car_branding.jpg": "ba5ff29ddf9a2ce123afde0b2d288771",
"assets/assets/design/design1.jpg": "55d794074f54744a69e607e6cfc6ca15",
"assets/assets/design/design2.jpg": "d192d1b43660579f60c8218052b3ae57",
"assets/assets/design/front.png": "c8778acfe3787a43416ed481d707b775",
"assets/assets/design/illustrator.png": "bef3eaead405a26eb7fcd50ca9612743",
"assets/assets/design/indesign.png": "924a6de90d4a0cd97baa0e45ebabf3d9",
"assets/assets/design/photoshop-lightroom.png": "e1b20f52e806f9bf064069d9137e4402",
"assets/assets/design/photoshop.png": "59f9aa8743e2512ca6f4fb6336b42f84",
"assets/assets/design/premiere-pro.png": "7dcc7fdce470ad650ef3ffec8b9f686e",
"assets/assets/design/side.png": "0a9dcc31dd652e7850f11b7a0298efea",
"assets/assets/fonts/SF-Pro-Italic.ttf": "3ec7e2ff1bcbbcd921333f06500e9e4d",
"assets/assets/fonts/SF-Pro-Text-Black.otf": "9f80cadd0354f861e40395829e30c965",
"assets/assets/fonts/SF-Pro-Text-BlackItalic.otf": "e8440a3f8321146ba635a6857b1a3278",
"assets/assets/fonts/SF-Pro-Text-Bold.otf": "83abf536b2b8974c7a8252e33fd09a6a",
"assets/assets/fonts/SF-Pro-Text-BoldItalic.otf": "d3ef4797b9a603b151d23c28efa58ca7",
"assets/assets/fonts/SF-Pro-Text-Heavy.otf": "a8aa297987c129b59d28ae31a8ef69da",
"assets/assets/fonts/SF-Pro-Text-HeavyItalic.otf": "d087b7401efab6617cb575346ee9e769",
"assets/assets/fonts/SF-Pro-Text-Light.otf": "cb3b3e6dbbfd3f32220c978e6525a025",
"assets/assets/fonts/SF-Pro-Text-LightItalic.otf": "e1c94a40856407fdcbde5cd5e8a07276",
"assets/assets/fonts/SF-Pro-Text-Medium.otf": "0c075137218e5fef7918f35c2cea144c",
"assets/assets/fonts/SF-Pro-Text-MediumItalic.otf": "a768d5da44fbaa8e1209a1eaaba0049f",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "cd52200922a501e9d22fbf48c590a27c",
"assets/assets/fonts/SF-Pro-Text-RegularItalic.otf": "a18dcd4a773ceb421336108e84d28e99",
"assets/assets/fonts/SF-Pro-Text-Semibold.otf": "fc325d3d8e9760e2e7c3b79009f39b49",
"assets/assets/fonts/SF-Pro-Text-SemiboldItalic.otf": "765ba6e482737826f328073435b5c240",
"assets/assets/fonts/SF-Pro-Text-Thin.otf": "7410fb04feb51d8e71a9ed2626187f87",
"assets/assets/fonts/SF-Pro-Text-ThinItalic.otf": "c410d6d883f5e87665b76603e8d50222",
"assets/assets/fonts/SF-Pro-Text-Ultralight.otf": "8774c5acf5e374d87085df47b242d3fc",
"assets/assets/fonts/SF-Pro-Text-UltralightItalic.otf": "15dcfb63a43e9a5b5292e1426ecb0c03",
"assets/assets/fonts/SF-Pro.ttf": "624c45a34fbc015fb178fedaf28ef904",
"assets/assets/gallery/1.mp4": "1f8f39bf9366a5f6283f7428647df2ee",
"assets/assets/gallery/10.mp4": "874a06d2fa7fe84f4fe2a5f01612a085",
"assets/assets/gallery/11.mp4": "9186c76d56638ed800112241162a9215",
"assets/assets/gallery/12.jpg": "de5c3e60e942ab3afe6904be85a665e6",
"assets/assets/gallery/13.mp4": "69c633b8eacac5c349dd7673ad0ce433",
"assets/assets/gallery/14.jpg": "e0ab20068e7b92be1fb3c5d9aded0eac",
"assets/assets/gallery/15.jpg": "e0ab20068e7b92be1fb3c5d9aded0eac",
"assets/assets/gallery/16.jpg": "7f87440f10cfa210b244e8dca154010c",
"assets/assets/gallery/17.jpg": "8b69814050d0a97ce2946c367fa7467a",
"assets/assets/gallery/18.jpg": "8af358d403cefcb820eb47bdc84eeaa1",
"assets/assets/gallery/19.mp4": "9e027d4ae1ead3286b57c16eea2c1cbb",
"assets/assets/gallery/2.mp4": "31861431aa234f4d658f7df270d39276",
"assets/assets/gallery/20.jpg": "04c09d954cdc2deac885acb12d857fab",
"assets/assets/gallery/21.mp4": "2a4d48907e247a9f79c556d563dc73ba",
"assets/assets/gallery/22.mp4": "93e462e0e413252cbcb0eae9fcb94c57",
"assets/assets/gallery/23.mp4": "af0ee5561b965d6f025cd525629eb9bf",
"assets/assets/gallery/24.mp4": "0fcc1b4f9b1e544a42a077cbec546a7d",
"assets/assets/gallery/25.mp4": "d093b8f3404240393bb708002792df75",
"assets/assets/gallery/26.mp4": "64db9eae909b1c169ec3839e6caf2b42",
"assets/assets/gallery/27.jpg": "f9729c010276a2d741ac045a84131a09",
"assets/assets/gallery/28.jpg": "363865924e847f486cf5932d94ebc9bf",
"assets/assets/gallery/29.jpg": "395d880c92b01787db293926bc4a3dd6",
"assets/assets/gallery/3.mp4": "c49be539ce7ba05628073b823e8aedb9",
"assets/assets/gallery/30.mp4": "7f0d90a0a89dc9449c2c678cd603ce2c",
"assets/assets/gallery/31.mp4": "a6c9467e74c09b8c7d0731569774f567",
"assets/assets/gallery/32.mp4": "7fd8578e6eed1ec4fdae3a691859d128",
"assets/assets/gallery/33.jpg": "68369f01ec8da24e7ca74de71fc60531",
"assets/assets/gallery/34.jpg": "019745180902f15738886104780d32d0",
"assets/assets/gallery/35.jpg": "4aa6f4afbbff6153d132564cf2823d24",
"assets/assets/gallery/36.jpg": "9bed255c739c9066e77eda46cf8f3658",
"assets/assets/gallery/37.jpg": "e608eea6e6468d912f893282d9350585",
"assets/assets/gallery/38.jpg": "ab7e552d8a5fafdbf994c8509060bd1a",
"assets/assets/gallery/39.jpg": "0a810763563852950ffae53eda5aa577",
"assets/assets/gallery/4.mp4": "5a804ecec535f426f7a5f563d78b6de9",
"assets/assets/gallery/40.jpg": "6f311c2471410f6b7d233cce122ca9d8",
"assets/assets/gallery/41.jpg": "f1b56d3bf08932a1a457a620a95db95f",
"assets/assets/gallery/42.jpg": "660f33bf590f234313dce7e39e175fbd",
"assets/assets/gallery/43.mp4": "2593b953f11d05732c683c9c1a68746c",
"assets/assets/gallery/44.jpg": "0ddb20631526df7940a605d7f3d392ed",
"assets/assets/gallery/45.mp4": "de5142aa9efefc39275664faa9255c22",
"assets/assets/gallery/46.mp4": "935ff72a4fa97d042ca0f99e42ef485d",
"assets/assets/gallery/47.mp4": "cf9b8193b26fd23b7dca6779dcec7bc2",
"assets/assets/gallery/48.mp4": "1f8f39bf9366a5f6283f7428647df2ee",
"assets/assets/gallery/49.mp4": "566ce6474f45cea9dd092bf8bf6a7c42",
"assets/assets/gallery/5.mp4": "c7fced0244746c5e521df15199d4e0a9",
"assets/assets/gallery/6.mp4": "fbc5be711d1aa941bd086aec7ee8346c",
"assets/assets/gallery/60.jpg": "a8e2dc0eec9f3bb8ac953ed6703bd9ec",
"assets/assets/gallery/7.mp4": "32cc04ac22c05040f0fcdebbd347927f",
"assets/assets/gallery/8.mp4": "084ef1ef8d57bb4b660caa365a1384d4",
"assets/assets/gallery/9.mp4": "566ce6474f45cea9dd092bf8bf6a7c42",
"assets/assets/gallery/WhatsApp%2520Video%25202024-05-17%2520at%252021.20.14_c70b75ba.mp4": "d1be3a416784f97b9584944cb879867a",
"assets/assets/gallery/WhatsApp%2520Video%25202024-05-17%2520at%252021.20.19_ddd1ead9.mp4": "de5142aa9efefc39275664faa9255c22",
"assets/assets/gallery/WhatsApp%2520Video%25202024-05-17%2520at%252021.20.23_c3ec3fa9.mp4": "fae163c44afffb8eb4c08d92cbcb59bf",
"assets/assets/gallery/WhatsApp%2520Video%25202024-05-17%2520at%252021.20.36_ba00cf3c.mp4": "935ff72a4fa97d042ca0f99e42ef485d",
"assets/assets/gallery/WhatsApp%2520Video%25202024-05-17%2520at%252021.20.40_0a41ad24.mp4": "cf9b8193b26fd23b7dca6779dcec7bc2",
"assets/assets/images/Amplify-Banner-1%2520(1).jpg": "8b7428218b141747ccdaaa7a3ac68c30",
"assets/assets/images/Amplify-Banner-1.jpg": "b06d462d06b4c3683f18be80c40380bf",
"assets/assets/images/Amplify-Banner-10.jpg": "269dc8f5c86b02399da4956c7e379998",
"assets/assets/images/Amplify-Banner-11.jpg": "ebc4972954a302bddc902d95a06654dd",
"assets/assets/images/Amplify-Banner-12.jpg": "84d2c8a2aced5d8ff2ed93fbef5ff52e",
"assets/assets/images/Amplify-Banner-13.jpg": "eb49d3fac58e4e66dfb7e6ffb6ef12b4",
"assets/assets/images/Amplify-Banner-14.jpg": "6c8ad58565df002a5585ecf2c6115d13",
"assets/assets/images/Amplify-Banner-15.jpg": "3e163a65d995dd22671af8a4a0f0cef0",
"assets/assets/images/Amplify-Banner-2.jpg": "255fb8919709751b62506d1e7a15fdf8",
"assets/assets/images/Amplify-Banner-3.jpg": "a0c5b2406ca9ec4523cd23da2091b6ae",
"assets/assets/images/Amplify-Banner-4.jpg": "8b7c329399f4f7bf6bd5aa2df88f0df1",
"assets/assets/images/Amplify-Banner-5.jpg": "f65c1492ec0e2870625b2b2b3682213b",
"assets/assets/images/Amplify-Banner-6.jpg": "540a7294261df32368aba9031b363bfa",
"assets/assets/images/Amplify-Banner-7.jpg": "25efb409ce186c683d9b7d681a7cd0d7",
"assets/assets/images/Amplify-Banner-8.jpg": "85355e7ec23489c5d5a800be41343ad2",
"assets/assets/images/Amplify-Banner-9.jpg": "dcb59f061aed504b1d3c8ac2abb51cba",
"assets/assets/images/Amplify-MEdia-Logo.png": "34daad3abcc0646cf949b88f0934eb18",
"assets/assets/images/amplifyWorks.png": "4c708047b8b618e909805ca2f2418fbf",
"assets/assets/images/banner.jpg": "66b0d6b15681b8d6c9d667a2b5d7687b",
"assets/assets/images/bus.jpg": "c0412f181cc9dd7f13c15b1949a297e1",
"assets/assets/images/Business-Card-Red.png": "e24a334dbba1f2c0e90155e64400e4c2",
"assets/assets/images/Business-Card.jpg": "064ac6207eaacc62928380e06dc354fe",
"assets/assets/images/Corporate-Identity-Red.png": "f4a1513ac3177a5fd613d3f29d7546d3",
"assets/assets/images/David-Masawe.png": "67d2f0c41fd2d102c99f507cea4cbf8f",
"assets/assets/images/Edgar-Masawe.png": "5d870c31c88198f9d553a56ba1cf6a26",
"assets/assets/images/feature%2520graphic2.png": "49860c923c70d002d9747bced2ced358",
"assets/assets/images/Home.jpg": "548e9cce1e900db67ac4c9cb9c2e5cff",
"assets/assets/images/Invitation-Card-Red.png": "e744c7a912fdf3a5def4c69f6fe97681",
"assets/assets/images/Invitation-Card.jpg": "5682eca67b4096979ede61568cd13e8e",
"assets/assets/images/John-Masanje.png": "ceb20e2d9f7a1fb99781e4fee5fef293",
"assets/assets/images/Kachalla.png": "dbe11616c74eb3a1fd711e06e5f0f68a",
"assets/assets/images/Logo-1.png": "56851920d2f6e5b9e42b6df8da2ebb97",
"assets/assets/images/Logo-10.png": "70409c89739e078baa38bbfe43c089cf",
"assets/assets/images/Logo-11.png": "c664c1b78c4dc2247c4bb91751471795",
"assets/assets/images/Logo-12.png": "db50820d74fe355250fb4f605215ad25",
"assets/assets/images/Logo-13.png": "43f6fbab632aa35115bed4b9153ad75b",
"assets/assets/images/Logo-14.png": "98a61cb0e65dbf965aefd3bf33cc95d9",
"assets/assets/images/Logo-15.png": "27d824894e2ea72bea7411d0f8ce7265",
"assets/assets/images/Logo-2.png": "0fde775556d7ecb9255bd53a679ed6c3",
"assets/assets/images/Logo-3.png": "a1221f3979ce9474d7b330a90e6508a2",
"assets/assets/images/Logo-4.png": "6ccd7b13bd0d8661f81fd7a4364fbef4",
"assets/assets/images/Logo-5.png": "cc490ffa0d5cd966390412ed88af375d",
"assets/assets/images/Logo-6.png": "2e926523cabcc6042fae017573c10030",
"assets/assets/images/Logo-7.png": "98ae8b29d2a2a55e52f062633942181f",
"assets/assets/images/Logo-8.png": "064ff03820bc1d5a6d7bfa0ab62eec32",
"assets/assets/images/Logo-9.png": "a07e391f62652f6eaf1d3baaaa84de13",
"assets/assets/images/Logo-Red.png": "e1aef4fbcae11e90f83d5e11bf29cf8e",
"assets/assets/images/Logo-Tzamani.png": "88276a08f9480da91cdaade72430e80e",
"assets/assets/images/Logo.jpg": "0e5a371d13fd5c5a396b8fd7114c81c4",
"assets/assets/images/logoNew.jpg": "ee94d6611e24ac8c309c944c72eb00e2",
"assets/assets/images/ma.png": "add110018a550bb3c5e21270a21c18e5",
"assets/assets/images/mastercard.png": "aecf71078e28e692f3ae999615d36598",
"assets/assets/images/Packaging-Read.png": "a8d885b56fece3fecea613416925a2eb",
"assets/assets/images/paypal.png": "9b817b7a19f430e7b9654b29f7ddbb00",
"assets/assets/images/Poster.jpg": "12a9aac95baeae91cc1fbfaf3d4aae96",
"assets/assets/images/posterNew.jpg": "ef2fc23bf9f1af00ab478759280265e0",
"assets/assets/images/Print-Shop-1.jpg": "5abd2815fcd91b3f23eef1a6bcb9a71c",
"assets/assets/images/Print-Shop-Colorful.png": "4f774e0bdec8a5dd65da618e019f3ddb",
"assets/assets/images/Print-Shop-Gray.png": "a2ade5d7fe15c4e573276664cf7c0575",
"assets/assets/images/sad.png": "e5c1eb50ae4f16da7fd3e359c14471f0",
"assets/assets/images/step5.png": "561a40411e43c6d94a650a5ad93673a6",
"assets/assets/images/step6.png": "4a3d58b5343f6b9a81eff89a9de25a8d",
"assets/assets/images/T-Shirt.jpg": "9317b277a3c4067ea560742f5630a0db",
"assets/assets/images/Tshirt-Red.png": "32a7bf7a94d186783daeed761ffefc16",
"assets/assets/images/visama.png": "54e30edf9d8e3f86b1935d5d3d1317d8",
"assets/assets/service/billboard.png": "053a41dae3b5febdc389258fb516b83d",
"assets/assets/service/card.png": "fecd74ce06dc9cef2b96d40ea44085e9",
"assets/assets/service/cnc.png": "d1585efad104a86ae584fa6721b74c67",
"assets/assets/service/embroider.png": "6c9d0dbb56d4c1c343adb75ac3d33222",
"assets/assets/service/facebook.png": "f9ffe7a2f9b99179d795c5713ea35956",
"assets/assets/service/graphic.png": "3e1e5809c3d66e9d3f3ac8a92e9de1c6",
"assets/assets/service/instagram.png": "52b760457b2be89842588f066a0164bd",
"assets/assets/service/interial.png": "2d5c685f4a996421079eeb828ddd65e8",
"assets/assets/service/plotting.png": "8bded4db308ad8186cb1e5f2b54b3247",
"assets/assets/service/printing.png": "305d8dac7633f3192785d40dabfdb4a9",
"assets/assets/service/sign.png": "97c4b66abb9a721c62a05de005fffea2",
"assets/assets/service/social.png": "7d90c8485e6614757dc8ac348fe7f19d",
"assets/assets/service/telegram.png": "dfe1f9882158a7e9a652464fd50ab521",
"assets/assets/service/tiktok.png": "60b5286655e210ec81d7a3c80e8064d7",
"assets/assets/service/twitter.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/service/viber.png": "47aae7718d2efd291a855f569e2a9d6c",
"assets/assets/service/whatsapp.png": "a59e768eebc730446e35f676487b8815",
"assets/assets/service/youtube.png": "fea0933add0f6dc640001b622c7091cf",
"assets/assets/svg/Icons.svg": "61e6b016ab7699395ed853a369f47275",
"assets/FontManifest.json": "f4b026f98505ff89de08ce772822925e",
"assets/fonts/MaterialIcons-Regular.otf": "0bf769db1f15fd5a99207fff9db72214",
"assets/NOTICES": "89daa39cbbbf8d1499723f669cc726c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "93990887ab19b9f6ef82f9e541732796",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "9e7bd4200d3c3c0b309004b4019d0688",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "517afe12ba5f7cf6827714d016acb284",
"/": "517afe12ba5f7cf6827714d016acb284",
"main.dart.js": "894c6fc0d8cf0402fed443fa6105c0ad",
"manifest.json": "70bc5c871f332d8e90089b66d8a1e6ad",
"version.json": "84058fd7ebb40c0c986f296ace3a74c5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
