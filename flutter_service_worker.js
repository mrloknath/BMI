'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cf495d661b619d4e1c1b2f5d1705ece2",
".git/config": "2415ac3b13e93fab7c3e7e0bb4a31896",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "18b9bb688d3c0b85f61c7b92ff52b342",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "081cfff4053504f243e13437d5fe426b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e42f97ebeac82dd9edb364d6a61d44f",
".git/logs/refs/heads/main": "650b33a7c2623f5ed3fd302fe83ea964",
".git/logs/refs/remotes/origin/main": "43f161b78c14797ae285a41675565dd5",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/f8cc0aac5cbb9d89a2013dc176f84d20e8cd97": "134eee2244ee10bea2b201365cd3a4d9",
".git/objects/0a/dae89e6cac01cfec68bd5aedbda48042d592fe": "1280ba69687031405968c2f557a5f381",
".git/objects/0b/16d48dd20c8a7632b31490d830d627c8cdce82": "cdc55421ffb95d31748b9bca0ff2625c",
".git/objects/0b/29af849c120759bb35d87ab27e695adc993bb9": "360703981d2a123e050059df929be37a",
".git/objects/0c/b8b36f5b856276069d7c03b81183c6916d0ef7": "e83cf6685f992d8488f7a205d7b5edb7",
".git/objects/0e/2a0b6d9986e0cb170d48c253eb1e3ceff27c6a": "1db21ffe72e70bc1a79f13203d4b2e13",
".git/objects/0e/df5cdf82895753d8d265a043fa3a906a532c27": "7fbdefc677e62426314ce677c8e72e4a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/627fc35812cb3f828db7c8c5372ce96ccec4b8": "c8c17ccc10603195eed99ab6a9334f2e",
".git/objects/14/f7b1e2c8f73aa7c597ad323dd67285b0a1a66e": "73dd3fb4b9ffbee6c811bb7a45d2f707",
".git/objects/15/a178bcbeda8fed0b704b1128fbd768cb6824de": "6e1934b62907baa4b259c3da48e7e799",
".git/objects/15/b1e442e7db10efaeeb1b628c339f79f7c2ebe7": "54278f5abe06c501ae49a7f5440b7d91",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/3d54604352b13debd4eac0f034adb9416352ca": "ee18f97d31a11d8de24361f272c71244",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/347042619b6d09e142b2e5227bb6262effb137": "166e7a2f15c4db3bbbc004d43d036f4e",
".git/objects/1c/6a4e5566e9cf2540eb79c300862b8bc35cd2dd": "f4ea6f1f5d6d94bb9bef57709d9b3050",
".git/objects/1d/189c7dff82011a14ab0965c6c27cddd05a02dc": "6e8d0a031160204b6067849af44d3f42",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/09bbde571d10255628ecb216b03bd3e93157d3": "6d35f8d42bb84e1d1c82fcdee5b4e469",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/4c5d4a99fa35350dfffd935157d6addc92cdb2": "6702d5ca174b3cf075528dff6ae6bdfd",
".git/objects/28/6d065076e3dfb0c0d73e95d15158270adf55ab": "51dbb4dfd39fb2b03467e80c8e1ee8e7",
".git/objects/28/d2b493fa486f327cb28d8ba077e34c04b96b7c": "9eec1aea6cc75dc301b7dca0e4291507",
".git/objects/29/135ddbb69c34e9c11740540e6db7acde07bb15": "0ebcee3eed0e0dd36acbf7e57d25c579",
".git/objects/2a/e706f54a79191fd38b369f204c1e2e2a475243": "d71a59a998cc4e08cc404d4a207ad70b",
".git/objects/2c/66400b7233359a3d242fa2cad7ab3f6be1e7f8": "fa3d27d6651ed81cf5abb91bb371a2d7",
".git/objects/30/fd3024f006a970d2a699452ba540312852f0a0": "20f5face11fc39f93f2b30f38da1069a",
".git/objects/31/e48179c733558f7d7866ca75bf30650610ae30": "00cc3d7dba98a3c19693114a1d4833c0",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/ffa21a55c2c51bec0a1617efdf49f2eeba8b89": "758f6d5a7a7f3eba600f28f1a8e4fcfb",
".git/objects/33/ce02a04e9264905ee51e609e49de7b78d9c0f9": "e355d372af271d730f5dc1d2c192e367",
".git/objects/38/ec2b27b15e05d56272896201794ef531175620": "7585fc7b907057f597e08d5889d7184b",
".git/objects/39/e16411653102163b3987a92e4356e265483ebe": "8718aa5faa8d7c2e3d33020cf3739498",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/7b8e01b3231aa65ba77b242a0b03293e7edc22": "a2feda6f54107e531c094f60f6018a0e",
".git/objects/3f/7e4e204ced82a78771af196548565ca22c8d79": "8c8be590c2995a76ca5c5208e3038d7f",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/43/706899075c44845fb97d1ac60d324c6c374046": "dff2d5cfb4cb5dcb4b4d15f280973ade",
".git/objects/44/75c7e8ded7dc729d0d4238fe362e39ba4b555f": "f1ead28c1b44de02d3b995f444733c19",
".git/objects/44/bed64b6751f9fc58e82d6d00fd37033fe733a8": "f5cd00587c2ae33bcd94b160d6bb5f2a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ca7df9e893466e2f58e4d3da0bcda3d538a665": "10b25dafb58ca0b2798a0ff005cff0ff",
".git/objects/47/59e8e2f6ad0d2b86fc57863bf57bc535c9473a": "99216d3cab13b9b172dea8b8d0891b77",
".git/objects/48/e0bedbda215b7b655e857567ca64032a048407": "2157bc1a16f972ab0a644cd6429a7136",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/1979197cb721895e166fd3b83c9218bde30834": "5cfccb1f3a9f6aec4c6155ad2a2c107a",
".git/objects/56/bf225676186eea89c7b9deeedd8d7c3ab43f48": "9381e4d2614306717392a0220a08a737",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/57/d68d18db134cd2bcefc020930ca900851d7e68": "0f0f894dba9be4e6cc3ccda53f3eee4c",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/dab32c5961c90b982bd7cddfb7aed5a0e34f9b": "d4c5bd14c6005a03a4a81e25d1848da7",
".git/objects/5c/055e9ee658a3c6ea4cd0619cf0074af3e62bde": "37ba8bcc17948ddd2f97b0523db29c62",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/412c77b10546d49774c3e3f3f93b3e98e96484": "483a9ca7a9c13c41667eeee0a2ba00cb",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/cd41b5b3f3f48b59f7f82c491266806dadf0da": "b61bfb44e5cbebbe987016d31eed63c3",
".git/objects/62/e0b943ca9d754ea4c98de84ab7630eb8bf0f1e": "914cd2fa1a7c0304c74e35efbd45b04b",
".git/objects/64/a832b2ba4fe4da69b57174aca251ff029675bd": "1d840f8fbfcf5ad2c2cfa434ec71c253",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/13434b821aaa07955b72a9f8022a1a6601af64": "f233c84d7c605a4945e74e8d5a4d3421",
".git/objects/6a/4718140b90a5bc85bbaf6b667c49abbfb31e98": "26f63b48996290d5780527233630124a",
".git/objects/6b/2f435e32b951047c6b3399d2447d2a621f2c56": "01051d7312e2bb3796dbe8413cd68f1c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/805cd009d9141221b1d21c52156377e1c07ed8": "7f8729273e6ab33f7c2ae9c2abeb5ac0",
".git/objects/6e/75acb9035ce6471d66f3288a203a813f237cd4": "3e36d49fc6e8c35d7c5f4b039b5708e0",
".git/objects/6f/308f8ffd016e213a4ae48cc37fc55125c07525": "a18b861aa24bfd44b079b403501e3557",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/16c13e0da806728015c796593bf10ba7fdcb44": "94ef7275b7492de7cab39bb048b0199e",
".git/objects/73/d457f23cf17831c7ddc149fb157e122af9384c": "73cb45b0f5d97738178eb050a02cb209",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
".git/objects/77/df5bfccabe940a3508632f6a8089590f3e0967": "2c64d0c35a0d0e05af52ba0d46899402",
".git/objects/7d/70cc8ecc1bf4aa6165eb33700298d570920ce2": "0d3477f397cb44d65e90ae38eab79564",
".git/objects/7e/712670f264c749fe094f6bb16530c52eb9eb27": "5bbb95e2bc24b25f0edc6dcf362b7f71",
".git/objects/7e/7daa132ace5d64dbc0e3c57c17c28a2241147d": "e93733119dcb8b980a9cefaa7d627818",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/0ea3fcb0c4356e7cc1f5ceca1eb0dcd72de859": "31f43013fc4cdc61415024e1bb8e3cf3",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/28420344fbea694707b70404dd1f629a93a939": "349e4a2beb34c564e5a9944fc85c02f3",
".git/objects/87/cc8d1c9f4ccfc931486ae69348b4faa8469b92": "574569398ca46787545c71419f2a4d16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/4f8754390002a91d3df2f9c9e27dec90b48b63": "7166ec993da57e0b23f2d32fc9b3b32f",
".git/objects/8d/ab0ac7851bf68b0b2d563e716765d14f44a81d": "3ef7bd6159da99f351da64a54e027c5a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/5c5d2b4e62111b7bb6c87700aaf250af984756": "ba7a49f1b1a9b3d50e7bf48366e67d2e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/adfb410580b03ba7b5b9f0e67e81e64c076a6d": "fd15009f9e2dbcba7c0d4f7d46da6bc9",
".git/objects/96/25e045fc3b75e59ca4caebe0abdd721f2051d6": "5e064c9f7b5fdcef881d0696514e8144",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a0/b8cacf4550fffaee4e368a3193b2441a2a7bed": "dfed44189198e629b26e7f151ae65b69",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/ad/6129902030472bd0eb703bc362ea3e51d382f2": "6cb539e8af47aa929b51d3acc7032bc3",
".git/objects/b3/d67dc5cfbb137ab85c3be69eac9a1064daeede": "84449ba92466e13a7643beba7dc2c9ba",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b69fd2188a3729e2dbe67e7d6497693a76628f": "e4904138c2a9f9b5605cde4b5d04ce35",
".git/objects/b8/fb119539eec061ff49a1ac2fe611872e1102ca": "87bdb6296a8f0078c4b2c8afc4559f7e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/328d45696c6ac54288a986ba132c385266e6de": "39a1344c5e8d2da1664616ddcb89836d",
".git/objects/c4/50401b77e7bacadd7fa4ded4501155f6d37163": "188d683a654e9d16b6f9b9975b7b902b",
".git/objects/c5/24282cedcefca748638fe5b8f5122721e48a76": "c4d85d16e05097c453b89afc325ce747",
".git/objects/c8/d15be964a064fc513ef64b524cf4cfcc3de193": "279f8a47fae8305e7b60bbf687794881",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/e1eed9c55f2fb70935ff00bf9ed2245389e833": "1ee74e9de17a89d0903179a82480a1c4",
".git/objects/cb/b3c1164c2ca24b27140cca0dec32b5f95b6cc3": "6768394ee49243f7a54acc5291312348",
".git/objects/cc/e42a0c81eb8355e3e01c4fa2a2b2e3e5da63bb": "179f462270a73575d27b1fb3d302d163",
".git/objects/d0/37a2e3a6d8cc60ce2f20dc07de93775ad1a3e0": "e7866ef3cfb01a2c067386b742e484de",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/4106529b3f21bcca1d2db220f0df16a47678fb": "bde40a0ba72d5112b7bf2e83f9dcec56",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/be3407b9ed5536c5021ff5463d4901401bdd07": "619368dd04e923706a865285472d3646",
".git/objects/db/ba12c6455c62bf4caffdcb0a0cb9ae25a77933": "06ae1c0a22e22c06b9c29272da9eb142",
".git/objects/de/5060a1dab24a1bbf9fc8cbe99640540584d788": "577c3e2f84d83abd089bad504c3b80a6",
".git/objects/e6/fafc9241b9b5e66eecf09af83d6b5ea9c7c88a": "89888895449188cfc4ba4e6ebba79829",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d99c8a1db1b5c1aca76c53aaed6cef49927722": "8aab9ff58a77be4c7c71286a6db0014d",
".git/objects/ec/dc252263e366e42e3ee31c3c7674afd02a2022": "867f8c96a8617009cb0a90bb0b66445b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/98c7c4b883eaa6865563f923f4fdc927f19541": "5900ef8777bcad34fb9da53e679a5fba",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/cb6c7b9c340f977d20661e5fa557587486ede8": "0c826ce0dbcad3b10190c705ded19c4b",
".git/objects/fa/298197f618d3b93069acfaaf7ed428fa5f31d3": "bac8afd38857ef5a190bdd6a908c6ede",
".git/objects/fa/4964d4c73b0a0a7893b266aba3fa5b5aaee35d": "193d4f3a85451ded1e3abbf0deaa9390",
".git/objects/fa/f92289f2fc6978b3726c9674b5b257245a9f19": "21fe0837906f70440732c68ac27b0482",
".git/objects/fb/74a8914f58696b77b3d37a8666ef8189a96858": "48bcd5410416924f0f01ef1d0bfc5e2c",
".git/ORIG_HEAD": "5da4bd4c9e69eaa9707048b50c6e5d90",
".git/refs/heads/main": "2c084a3c1dd094919e012ffa1f3f4700",
".git/refs/remotes/origin/main": "2c084a3c1dd094919e012ffa1f3f4700",
"assets/AssetManifest.bin": "f4fd9e65a32319e0989fd7cc1522d9c1",
"assets/AssetManifest.bin.json": "c493d1e18fab7ac6d09b2e3dde0ce573",
"assets/AssetManifest.json": "2d0bcc12c8cc13860ca917b8379ce588",
"assets/assets/images/splashscreen.png": "c8d8bb18bf12eb1f4d33f125724f2c2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "40bd0f6392fe8566cc1b0802fbbff2a3",
"assets/NOTICES": "5d4c492e2a96f4afe3d919f1668747f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "d1a9a2b71ba7d521eb47c4da88c252b1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9b978d694f5a9271f2aa7e1145372a3d",
"/": "9b978d694f5a9271f2aa7e1145372a3d",
"main.dart.js": "ad429580c0e108ef9e983c23de04b4de",
"manifest.json": "29c01ea39b7ef5d2a6698b39598d559b",
"version.json": "69289e46ca83a6a33a2383ba1727681a"};
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
