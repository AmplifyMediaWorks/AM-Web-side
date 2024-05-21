'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "37972c29d9044bd37ad89107ef0e0a14",
".git/config": "421fa6cf57c086103268c1ded766d454",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "857cc28f1fde10fdc8613a1a00595f61",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ac2b6ce9a2f6e4815e1dbd9c73e5e141",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20c8b18e6b29a4d1578512a2241bb31f",
".git/logs/refs/heads/main": "986b78959e6cc1b62f82405959e74080",
".git/logs/refs/remotes/origin/main": "13fbbd60bf1f01d54bde40489998343b",
".git/objects/02/4e2c3bf40de3c3cd90a965c1f86ab729858bcd": "14473d8d20dec1c2fe1261cb03587938",
".git/objects/03/0847b9bb7966334f9faf36fa441d40e3d4ed48": "ab1ab8518434908ac29da37e2085ef21",
".git/objects/04/ed75497db309b9eae19ac704bf7333e6e8a307": "7bc1e8f4118ed53c1c19e328ceda509e",
".git/objects/06/0bacecb11f1f41a463b2bf0d77f3fa1a2cd667": "862f8e0a89597d7219d2e61850d4fc62",
".git/objects/06/fcc08960b4730cb90f9120bec01a76608e4509": "dca780391738af3fffa05645947f061d",
".git/objects/09/2b9da5bd49fa7416cb8ae9185ab57f23a21972": "3a055df8eb2af55e53d7bc08bb04d00e",
".git/objects/0d/6d274a30c16f942689b547bd90120cef1d5222": "75eccc91f3a9e85f9154375bd9aaee8f",
".git/objects/0e/a80fbcf812ebbc81f6c386b307fb6df093bcb0": "71c27bbf8d2ca6330c2e2eef3522a0a3",
".git/objects/10/7cc447e7c38215ee407e3deaeb6436adba084d": "b7916db7930859751e84520e493d26a8",
".git/objects/11/8e3f2a0422972bfa623b0bf45325e26c51fffd": "5668fb0fccc43b229fdc424ce405fead",
".git/objects/11/aab3a912638139be366f3befaaf3c4f374f091": "ae13d921641c82f72928f9b68adc6b2e",
".git/objects/13/65dd46992818c60e1f511d57d60eea39ac6258": "626e7234a16db9287ae833352198f7ed",
".git/objects/16/ac1a69c37d39ba6ab30c3735b506459bb6a484": "06e076a1d2f86c6ec49b2f3c702edac1",
".git/objects/17/e24614ebf49e005e06a491c82ce4644bfa82d5": "a23776ad2ab88143a17fb629669df749",
".git/objects/18/69b982fa791940867f6bf6ef3b03f0ac8c6277": "b9868c138fffe5db1be9fc69d35be5ca",
".git/objects/18/9edaa6726478a88878b051c94fb0888be488c3": "2129a342ab2a813a073688c7f32e879e",
".git/objects/19/7d3f3f425d0cd95999a5d01906fc055ec92fa3": "07be08a5e528b19808906b63d3ba7d8e",
".git/objects/1a/545cfb36c46a33c50ed08006d03c546e5a6d06": "0fa9b0e1be7761d634f595e510d5d4d5",
".git/objects/1a/5e2eb271d56ede21b64db33b57f84fcd5ae4e3": "c4269a462a63a0485968ba7293982a88",
".git/objects/1e/e7dce8b623b624c52cd1a73776ba28d1d639de": "854fa87dcb3c7e0e7542e9ebabd72feb",
".git/objects/1f/285dcc644ca8f2a976f479820838bc562b22b9": "f7b25c1aa20d606425ddf8ce99072b12",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/5e881dfd94009deab00ef1a8b57494093de77c": "c7e909d5e44929d50cded75d880d9328",
".git/objects/22/6072f29853c26b4679858d442030005a347ce0": "a8a91bba2920314fbfef0dde27cad68b",
".git/objects/22/699c089f343bf82c3a1607dd35bf447b147cc6": "02e7e49da34a92b653df4be0207d3069",
".git/objects/25/47551d5d6477966adc1358bb6cc1fa9dbacad6": "4437873071260c8958f8babd831fc023",
".git/objects/26/002d46ffc94f7b9e57523a1ca541974075977b": "af16825980320bfcd7b7d1a7aa2e2649",
".git/objects/2a/68de59f32a4f6e0351135dc2bc075967dae5df": "b92bf10edfb1bbec103012516673de99",
".git/objects/2b/19f90d95aac6385829060b20bfa16db501a265": "9fb6eb119e528887b933f43c8468346a",
".git/objects/2b/1fc063b70db397efe96c9710e0934498bc3fce": "efac53256dc13dfe585b2ddde1e5856d",
".git/objects/2e/b3f4040870c02738d4854fef11d9e42b91cced": "7e21c190b377939905264312bf72e791",
".git/objects/2e/ffbb1eebaeea4369e4e8ff9436cb22d406e42f": "087981f91efac0cf00ca4e336d3d58d6",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/31/0e9a6269f6b8e705d94b7b3e92241a4b571e29": "35390d8ea4a5ef1b587392144662f7aa",
".git/objects/31/f204d74d95342203ce9216b71ad084db286aa3": "a0cc2e9ea2e4f0888019d09d084c2cb2",
".git/objects/32/7f1e36f63d4315ed7f78f546bfc91045c6e377": "73f4ad0ca94d28d6d60536cd26efb1e3",
".git/objects/33/4127e658da7c4834d5875b979cca3f5aa556d9": "7838bdbb01b03f2bfc64b6fc8a65485c",
".git/objects/34/f855b21ccc64e63b777b3292c236d4362b968a": "35fd6f26ea9b3c40ea3c930087b38ad9",
".git/objects/36/f5b30e3f98b66563b68fa1320b4cb8efac7528": "8d7511e6c35baf3c4571460c175856e2",
".git/objects/42/7d5c517a9a51aaabb4d6835e2cdce91a29fa93": "700fe7096a88661106ec3948c0c9426b",
".git/objects/42/b4ea7f53e07fac8995d511693b8c64e7ef965d": "7e78a5b4bdb8d83b3feb2627aae9bfdd",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/820a7d0d180539c8d62ffd3f72e4e625a9c86c": "883ed16c82d533ca9d58446542db9353",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/cf8ce500fd2287856f846dc3794fbaa2727798": "7c5723f2189879662f57e0a0d12a4890",
".git/objects/4a/832ef3eae335dfe6a743a2f79584de1169b729": "af89a55b16e2ea4eea9ff8b9a78dd92c",
".git/objects/4a/9d45f2628986bff222c27b107f1a63f02d4da0": "507d681e3e262617c9728aae44b07563",
".git/objects/4a/9fec48ea6b2a21a233ec5ceabe828b50dc3875": "af2c97dea85173dc9bb9fb33ea820374",
".git/objects/4b/93097892808c73cb70720dfb42465cdb5667b8": "918eb0021ef71d3011fec88281cac4e3",
".git/objects/4c/884aaed07d0e9263dfd7fd7f06df23ccaac134": "e2ec8c1878608df2dd17f7987d0cb8b0",
".git/objects/4e/8a342bf77400af0be00c509692269f1b3f9a09": "99c526e5b5b6a63340af8c1eaaf2f10e",
".git/objects/51/36335b47694b7735a013ff3647ad66c2f5a572": "af5b76081177f3596b1986a228dc71d4",
".git/objects/53/0bf8287ca095f58a731e9e487d84377050068d": "a08c18b24f24ba35697a545ce028de48",
".git/objects/53/d325c123d39cbd513f2c9581159fdf5d40b942": "2ab4efadf8d4e287a94145698192e0dc",
".git/objects/54/be218b7150e6601559af0e0760903ddf51f263": "2104b3c52a01b7e74ad9a52bdf6e5c62",
".git/objects/54/f176dbf27fac7fd55de4c40a6efad5893a5a19": "fe52bcfa57ba3d2496c2268a56fbe284",
".git/objects/5a/ea976af213dbac15838797f095111b536ca176": "a8371e3265eb2e280a2a962fd297f77e",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/61/5c87e6fc049429a8b33a280ec42bde54721856": "ec91eeec5f2f8c08fff7bc954747c533",
".git/objects/62/35a507d64f626b2e19bdd83e310cd88b50d2cc": "7b72624abfc97057368cfea9b90ce337",
".git/objects/65/8c462310caf2d6ea1eb1aa9830f88c43a824f8": "72a63741d8a048f69db08f12e43e5dfb",
".git/objects/66/6a9afa3fdc76b133b7efa372c2774c88c0731a": "5db1f00110391eedbe0a524e81aa283f",
".git/objects/67/bf7c5ff5de23863f9dc8f589c75e64d27551fc": "1dd8726d38496652143062ff91946818",
".git/objects/69/20be9b3d7d0c6d72f5cec51b7f0d993a849956": "7e5473de632c62eb35f0a020cc8f8f1c",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/55528c8483dbc850e9ee41e815d46c6054c745": "1e548a605534536769f4ec31f1742ffa",
".git/objects/6a/7220850ce127bf818a5de12437686ec8f5d185": "6d1d189565868060f40441b4fd49a957",
".git/objects/6b/00349ad58a8464153181b5ccae3d9219abb564": "426851bf92428cb585067d3c9f9a16a5",
".git/objects/6b/8305b09fb381c23a71ae80136d9662c42c99da": "19cda31af22010258ff080d4a4ca17d0",
".git/objects/6b/98eac5ef89178dffe412d98ac49cf0f6bd1b9c": "a2c3f8ecae18755423cded8b3b56370f",
".git/objects/6d/2ff2200eebdff2999578a06760c360cd4b672b": "ed2ef83b8459602f569b1065541b4b75",
".git/objects/6d/5f18a4ec57ba52650fbc28cbc92c747dd88ef7": "19f5a804e508ae4130bbd7651fb72502",
".git/objects/6f/9288fa2eddca41414c255467ee4ae74c3d89c3": "528a388e00718d62329d7f1aa0aaea6f",
".git/objects/70/3845b72c787ea63e88bfa26522e991276722d6": "2b64b325afb83a9dbe61f945720dc992",
".git/objects/70/7b97b139a0c1b07f2dfd1c7f0c43846bb66270": "f93c4af6576503b5997cd9c3c02abea2",
".git/objects/71/18850c07d6983109bd3c2a11c0b8495d37263e": "2fa863e283230bf754a21b93a5d38864",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/72/06df37fe09e7ab29a197a7a9a78178c0ede71d": "be7da8c0ee46b89c5d8e4f380e46c740",
".git/objects/72/9a468fbc0b3b3adf9dfad0e64e65a504dbe349": "9fe5587385977732fdf1a7746d7b7ef9",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/38180924af861658e8ea8ff05e8a2ae7899689": "456ab7312e2b40273e08ccc3b8e55f14",
".git/objects/74/03671b947d02882081115973c91fe72c99caba": "0f38455053b6e410699be46277d3ceb3",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/75/c1d439b2483e6202cce2f7d39de9d3b4b8cc1c": "fe0f64b37cda196964f80425fa356554",
".git/objects/78/b9c3e8a934476336ffe5965ec9b2927689ed40": "fb1ad8abc810fe95591fe09ac6287127",
".git/objects/78/cb190d0341c9bcf8a3be5e09d63c6770fdfb4a": "5532a62b9c3c3f16a34eed0c9e253802",
".git/objects/79/d86e0e2b59b3d8a96275848b044a28593ed793": "45def31bd49ac381de7269412796b216",
".git/objects/7a/01d11af13fc4eee17888108454c05d859b9c35": "1370d2d6d6c2e744055ddece22f50120",
".git/objects/7a/1b6a9fef41184f411ecf4d5095d5a4e9523a3d": "da79503777e5915cbfa6125a74c8e023",
".git/objects/7a/44f93e094443c9ab38d7ab82aec6a1db0edc1d": "d34ac15fac94d65d9d304c9e7c17e8f3",
".git/objects/7d/b3f38caf1afc6035c7a718d418cdd36a8b6f99": "43ab57ce8b97e8bd451acbfd37a8e0c9",
".git/objects/7f/66c8ae92a88664a41b539cd022fd159a2375aa": "8393c016a63af7e7768c9daad7ee45a4",
".git/objects/7f/c3d98632b967f8b268315fe837f0606f2a4474": "0a1e29f12c708f7ad663a1c55d01220d",
".git/objects/80/e7d123c7c7b9a816852c310d0ff757b17a4f68": "64cf0a827e7e114b55d47d0fdf56927f",
".git/objects/81/76c24086727102b4dcd7d3425d1723d9ba5329": "54770fd1154adc660b0550235064a526",
".git/objects/87/88cfd1a006ee3b7f69ed2c6ec22b0982016e85": "f29977678703faaf9a59a1ef7b834a88",
".git/objects/88/1a0e788a3606bfa1069e4a956c72f152aa290b": "78ef0973724dfeeadf99264b6933c43d",
".git/objects/88/2bf420ed2936dba79762f546a93765ca483865": "1a0943e515cfe1bb31ff460b7005a303",
".git/objects/88/9a26963521bcd03cd7e9519bb8ddb58e799f3e": "6857147f8b321a8a35d8f75582d0ce33",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/13113db6d1e1978e732c8ae2b9119fc70ae1ca": "d8b3b81e20f5455338e92992dab4e680",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/3ab11b5d6366f77ad4c3c6a39393a168d88998": "2b9a04aaef49dd5eef767533ddb24d15",
".git/objects/90/bca5e87f73a8ee4980af7937bdff23ce81edc1": "969891988bc10bc76ec27947335ddfa0",
".git/objects/91/d1330be3c1d4f4cb98d850da27fc787e2678b9": "f8419a7c719e4745cb2a71468b43a7a8",
".git/objects/91/f517d98e42a28b1e21508b868b9b4c0c702a78": "f1abeb60d5ca59b0db17da12260f6f3f",
".git/objects/92/5a5a990102987bccbf0d2e8679fe9c0efaeff1": "bfccef7840c208a03d0648cd377eb1cc",
".git/objects/93/38552bc1695c63b2f8b77efe7a1fd4b82b71c5": "516cec854c7242d41e03a9f667efb85d",
".git/objects/94/2804e7312d31ef783977288b6ddfc7b86b529d": "f6c145946262e32c9f1b4ce02f5dae35",
".git/objects/96/04a71fa4748601c64b80dbe286a901d410d9be": "e7d597ac74574dd239dca9913dfe9a1e",
".git/objects/96/11449297fa34aad561426b2e75743e0ff1bc56": "6d6b2229e3aecb854ff560c9b69db12d",
".git/objects/97/ebf2ff6b3747991ef7cb5ef91a0c0d3325f70d": "779a10e3bb66397e2084416ca262d76a",
".git/objects/99/5e96070b5965158e39d1d9f0bde73f7c3a7427": "5277f577fe1c840e7ad10338cacb1963",
".git/objects/99/f043ab6d2a4605106b180d47e8ca31fc35537a": "7acfffd760d8285f584630baa0b802e7",
".git/objects/9a/aff4ccd7a80ee5a6b0f161000adfebfc43cd36": "6f34e07e4f9dc19b00d54f9470189d0e",
".git/objects/9d/1b1284c88cc1bae587d5691bd05e0d0b12ff2f": "f8158a43b9c36d3fe7c04dc0f319f99a",
".git/objects/9d/47c11eeb617c59c2f5fa375319fde51edc3cd0": "93e67e471c528708136a4736f206b452",
".git/objects/9e/01f20d5b4c0e6c5863647709411469f18d3aee": "d95c9b2ce30698cf31062fe362a23dbd",
".git/objects/9e/45c8c31bee17fce23ae03c6e125a38199d8c73": "0157188af88f7445388c834f7982ef1d",
".git/objects/a3/028186ce0bcf472196a0f034d7e3a8ed87f0a6": "e1df9fc51cc6076d96a5a7b9247b2381",
".git/objects/a3/37d366879ec3e61647e52e1cc11c681d1166be": "d1ede66fa2eb3e0395130d51730ed6ec",
".git/objects/a3/beb8b1b18da357690a4b11ce5221cd8f43aeca": "5962ed274096dfa5f2501b48cb9f7735",
".git/objects/a4/21f03552b3b0e668b0cacb18784b7148d21493": "a7989731ad6d010961b2f43ffcff6c2e",
".git/objects/aa/b3ed89e14f28b3be22f1764b5389e112e7271a": "79ac797220d2214bd4987c00dce2da5c",
".git/objects/ab/5968d788ba00a2ba0a631f3cb083f02a7fc6fc": "d97574390d1020402e2e3759ded6f787",
".git/objects/ad/9d8ea344507d19f65032473115fbbd4379d799": "774aad87a2c0a510a48c8ffd8cd84bf2",
".git/objects/ae/34cbefbda6642c9785a515bec005fbe6997215": "adb0ae157405e166421aee0938fdbcd2",
".git/objects/ae/360e33b6cd6614a156840e656cb64a37479c79": "5d878b9930dc8eed4ad78ea719df3c70",
".git/objects/b0/2b27c2876decfc257e9fccf964506763e8052d": "72bfad0a59d24e73e88fa544855e626b",
".git/objects/b2/ca28eebcf6452213e7e14234735ebc914c6c2c": "549ae0615e99905ccdfefedf99c7e706",
".git/objects/b4/935b7f9506876bb2069cee9dc94f3588bd1a4e": "3a62cd8ef5bd981a51b408d8e01bf48a",
".git/objects/b4/d871aaa34f127850191e7601b3194a85eede27": "bed6478f0ef6477251c61542cc9e3ec6",
".git/objects/b7/372d11922c1a21f1290cc710bc8d025aa0749d": "d4c5353835129a8eb2e3a3752ec67a00",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/36fe0a4f14968d9d4801a8ca3f83f70e7c4adc": "f81570ca9bc5fdfdc6dee1f82b1e8271",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/d291cfc733c64acd054748805447adaba4e496": "6eb879956956d51fc3035c8eb592af8d",
".git/objects/ba/3f289a0d3eb9bf3785cda0a862681abb61840a": "a8ea0e06f772ad44c7e7893091a94b50",
".git/objects/bc/26ec07614931cafd519ccdb202c9fbf49a2c0a": "0287b66e8594c227c8d6b190f4dc8f96",
".git/objects/bd/2bf04e697de6ef5b201c2474f48bd36ebfc78e": "4200c8d5ff8e242e15f2c38eedafbf6c",
".git/objects/bd/a28dadc9a3016853c553d68a3c876c0d15ff65": "009dc2b35c22968106929d5252e04ce0",
".git/objects/be/1dd7a3eee62d235c2aea17cb4eb31207ef1d4e": "3ef9f25e70479360229abd4ff8437590",
".git/objects/c0/411c99f12b422284da8b4c2269e763c6e21672": "1a20a8f5930300f6d50c517b2f8f50ff",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c1/f698d557fa8f90993990a6ab0e52686364db83": "85228eb0083de0baec943aa16975a543",
".git/objects/c2/51b3a60c22f004cbbc144a404ce883f607f785": "7bb6bc7d171de15752f372ecb1ed3784",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/bdfbb9348f37d1642f4f80329088efeeee1145": "90b86d6930e296796934dd07f5458c4b",
".git/objects/c4/faef3df782396bc58e1ba9c5df9746c81307f3": "5012f950a2d1e9caed35d8a2282400d7",
".git/objects/c5/7c9adcda06630414a9593dfe675166323cbe8e": "316e68fab37d848d89150a19a034ef35",
".git/objects/c5/8056a0a08f245f17c2bcaefc040c630dc6af09": "eb370d0579efec8899c9be78b2e9cc76",
".git/objects/c6/4f35a9f2ad8d4ca049109db229fc6808d26a52": "c939250f2fa7a5db5b56b7a1d62a1d45",
".git/objects/cb/8c90da38acfea42adbdf8b0d550212b8d4ed5c": "c4b93c4c998fa432da216d1cd910a0df",
".git/objects/ce/77ce9eb91b08c7eec16bb2b4bc4034b2c331c1": "1b4d6d1b7a17f08888c23d10616faada",
".git/objects/d0/8bbea4a0d695e8a9bee759ade8df426749a89c": "5201765c005cf603c2f11b7856f0b4fc",
".git/objects/d2/6307269994026e497ff435c4013335d224636f": "f93f36d050f2dfac4b6f12abb02e3831",
".git/objects/d2/e72b637cb3733bec4844fa82f20fdace720538": "65e74ca0832a04b621c014b352498b0b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/d46a1b7c6619c4565f51249da6d76dd429f79b": "8ac264448c0a92bd49fb1fc02b2fda02",
".git/objects/d6/0e633d36ab1e2958364f80947d585cdbe044db": "36644a94a46ef69112f0c3fb0d57764f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1c59860f5c26d4a375727e7683c7fbb23cb3a7": "4174a1c36cb19bec717ff7f31b916512",
".git/objects/d8/d99b2f7ced48233d30fa8874767841e2505a01": "7815c133f3cadbdc7cd11dc536474e45",
".git/objects/d9/e9011f5c80f0388e9f04877dbfc996d29035c9": "74906e2e06b328c22797810f4cddc409",
".git/objects/db/28a8bab8f7d6139384cc474ceb5090827e5b9d": "4e4c81bb8d709423aa56158ddc689e6d",
".git/objects/db/adfb578189ab1a503e783e3ae58923cb1817f3": "4b1269eef6b495624e8f72e4adfb6bde",
".git/objects/e0/2ff6c2e8e838defe7235e9e8e84183d3dbd6ab": "2375d3b5a8b48910dd8b48c19756637b",
".git/objects/e1/330fff1d7601832f8d7e10f413a02827883f71": "fc268ae8b9e363ddc436233c88dc33f7",
".git/objects/e1/cc577fa5ff19e21ce72b6d1eaff708edd111e1": "db1d4f8b32824367b2551341015bfec4",
".git/objects/e2/6eca058af8ec9307bd1d7d42668594df38c88a": "474150bb5de08f242e8164667332ae72",
".git/objects/e5/0a30ec1e12c96cc0cbcebb0ddd06087baba664": "f2144f09b90058253fd579827c1a1a37",
".git/objects/e5/73be7c87efedf9b5109ec2857e19e4bc69f57a": "56fe88455376cb5a001add6b34cf01cb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bacf167bc32658ae44454711e9bbbd3d78ee44": "03369ab0aee5c1092cf0cfc73a76af28",
".git/objects/ed/02a08e9ccd934001086c47ab72b7699ade20a6": "7df8fcb73e03af35ff5cdf5bb5f889b2",
".git/objects/ed/17232e4c8548e342a1ed85c09906fbbf900de1": "ea4a75960e77d9f8859731882896e228",
".git/objects/ed/828c31d9d50f37f199aabcd146a119de0f2f09": "a429336009e90811f897f0fdbfc01d4e",
".git/objects/ee/4705906ffa6915817d10bb31a4c43c3e3de523": "33cc5d2bcf474f67446e9c9a84dc5449",
".git/objects/ef/0dbba5fa25307e9f35c0597ad986ebad3865a3": "18321769938234ee2fd8a1bf2b53c542",
".git/objects/f1/2cf015284b0efc8f769b936bbcc294b9b0fe11": "943619a8626f8735048446644708a34b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/26fbccc82a7e0a8070c5719c41dfe1a8a4ee77": "a8610093144357cdefddca6208f62e23",
".git/objects/f2/9224ef7eeee9520eead147a4e364d96001b5c2": "33b7879f54ca8492421a86c8127ba95b",
".git/objects/f2/a94ee6fbd76d82692d171cdf6d152c46d9a39b": "a3eeecbc67e37c43cc7eee532c09d4b3",
".git/objects/f2/db0ef45b4743cc383c00abd10742fe356e077c": "ac0783163f85620f32960c4973563a4b",
".git/objects/f4/a306f5fdccb266d7137c578e045dbb1b3150ef": "c4746707991e5bc82379afbf22b0d8c1",
".git/objects/f6/9c368e4d6b6b55a5b42b1be939b18768d61d0b": "b662482e678d321edbde61dcd07440c0",
".git/objects/fb/05f124eb4de7ee8edda4b3378b8ad3c84c9be1": "ae41873c918d6a6a731cc89679bc8531",
".git/objects/fc/9ea1e04fa9f8cde1f9e829176310ec5dcad21e": "2540328519d3f82bafde8a78ba0080d3",
".git/objects/ff/0e3d362fce684f28a6ba99cf41ac81af280c45": "028973b406b0e06188d446f7d5140ea7",
".git/objects/ff/aaa20508e0cdd7d3c9446f3d3810bd6594d384": "28363809bc5564ee300598a07858604a",
".git/objects/ff/e36d37d1095f43af09bca3c056ecd7d05c7802": "c18a1d8fdeb3187924a1302410aabe14",
".git/ORIG_HEAD": "eceb9288693d932dbb122016abf29e08",
".git/refs/heads/main": "9c94a934d35c9e36ed3ed9f305d0d01a",
".git/refs/remotes/origin/main": "9c94a934d35c9e36ed3ed9f305d0d01a",
"assets/AssetManifest.bin": "09e96634bc1c2930e5897d2e4ff01dcb",
"assets/AssetManifest.bin.json": "de3534e77194c29f24e87225c8a8270a",
"assets/AssetManifest.json": "929c511366158e490af1ad7026405828",
"assets/assets/avatar/dog.jpg": "6e33ccb759a0d4d725d4a283d49c6ad6",
"assets/assets/avatar/ghost.jpg": "afc5c05cbbe95a5dd58d9cad485bc781",
"assets/assets/avatar/goofy.png": "529268480339363f62844815a4fce808",
"assets/assets/avatar/kachalla.png": "46057eb8c920dd9b08fd9c88d1f9c44f",
"assets/assets/avatar/ma2.png": "8a72e2441e7c7c372b2070c6b48b1180",
"assets/assets/avatar/man.png": "d1d9ac01852b02f6633838f7d677778d",
"assets/assets/avatar/man3.jpg": "6a124c702f84cbc0107bb63fd644bf13",
"assets/assets/avatar/mcnell.jpg": "10ffa4a4e414255186e12425908fc1fc",
"assets/assets/avatar/w1.png": "bf6a1317918f988ad653e2d51358cd66",
"assets/assets/avatar/w2.jpg": "4a8f917f2f4f8f5fd10fc1ae48ece343",
"assets/assets/avatar/w3.jpg": "18e24787a2da3c856f086deb60701d0c",
"assets/assets/design/after-effects.png": "460b48f19bfba4715243cb8fcd3d8279",
"assets/assets/design/car_branding.jpg": "ba5ff29ddf9a2ce123afde0b2d288771",
"assets/assets/design/design1.jpg": "55d794074f54744a69e607e6cfc6ca15",
"assets/assets/design/design2.jpg": "d192d1b43660579f60c8218052b3ae57",
"assets/assets/design/illustrator.png": "bef3eaead405a26eb7fcd50ca9612743",
"assets/assets/design/indesign.png": "924a6de90d4a0cd97baa0e45ebabf3d9",
"assets/assets/design/photoshop-lightroom.png": "e1b20f52e806f9bf064069d9137e4402",
"assets/assets/design/photoshop.png": "59f9aa8743e2512ca6f4fb6336b42f84",
"assets/assets/design/premiere-pro.png": "7dcc7fdce470ad650ef3ffec8b9f686e",
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
"assets/assets/images/ma.png": "add110018a550bb3c5e21270a21c18e5",
"assets/assets/images/mastercard.png": "aecf71078e28e692f3ae999615d36598",
"assets/assets/images/Packaging-Read.png": "a8d885b56fece3fecea613416925a2eb",
"assets/assets/images/paypal.png": "9b817b7a19f430e7b9654b29f7ddbb00",
"assets/assets/images/Poster.jpg": "12a9aac95baeae91cc1fbfaf3d4aae96",
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
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ac31a1371ef92a1b8c39b96a5a9a8ca2",
"assets/NOTICES": "0421210b69dfad5699883d8ffe8d6cfe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4731fe23b2877a588aa6ce917c70bb4c",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "8b59bb301fc2b1136f25606382f2ed6c",
"canvaskit/canvaskit.wasm": "512a44e3eb35bc8387b01f20b18279ed",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "5573e55905729e79f52db673cb8da1ce",
"canvaskit/chromium/canvaskit.wasm": "afa879dffce647cb0898a63b6c271cda",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "f6aac18483aaa2289ef773832f018a64",
"canvaskit/skwasm.wasm": "c85d17cf519cb9bde54991d5959333c9",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7d0ad989a93a29f785fb58fcaad3d9f9",
"/": "7d0ad989a93a29f785fb58fcaad3d9f9",
"main.dart.js": "aae6ca6a99ea2b718a7562e8034f7e17",
"manifest.json": "70bc5c871f332d8e90089b66d8a1e6ad",
"version.json": "84058fd7ebb40c0c986f296ace3a74c5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
