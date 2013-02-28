if (typeof(Split4Tweet) == 'undefined') {
    Split4Tweet = {};
    Split4Tweet.VERSION = 0.1;
    Split4Tweet.split = function(text) {
        var tSplit = function(a, t) {
            var rtn = [];
            for (var i = 0, len = a.length; i < len ; i++) {
                var text = a[i];
                text = text.split(t);
                for (var j = 0, lenJ = text.length ; j < lenJ ; j++) {
                    if (j != lenJ - 1) text[j] = text[j] + t;
                    rtn.push(text[j]);
                }
            }
            return rtn;
        }

        var texts = [text,""];
        texts = tSplit(texts, "\n");
        texts = tSplit(texts, "。");
        texts = tSplit(texts, ". ");
        texts = tSplit(texts, ".\n");

        var result = [];
        var tmpText ="";
        for (var i = 0, len = texts.length; i < len ; i++) {
            var text = texts[i];
            if ((tmpText + text).length < 140) {
                tmpText += text;
            } else {

                if (tmpText.replace(/\n/g,'').length > 0) {
                    result.push(tmpText);
                    tmpText = "";
                }

                var length = text.length;
                var unit = length / 100;
                for (var j = 0; j < unit; j++) {
                    result.push(text.substr( j*100 , (j+1)*100 ) + ((j == unit - 1) ? "" : "...") );
                }

            }

            if (tmpText.replace(/\n/g,'').length > 0 && i == (len - 1) ) result.push(tmpText);
        }
        return result;
    }
    Split4Tweet.minimize = function(t) {
        return t.replace(/ for /g, ' 4 ')
              .replace(/ to /g, ' 2 ')
              .replace(/ before /g, ' b4 ')
              .replace(/ greate /g, ' gr8 ')
              .replace(/ be /g, ' b ')
              .replace(/ see /g, ' c ')
              .replace(/ you /g, ' u ')
              .replace(/ are /g, ' r ')
              .replace(/ and /g, ' & ')
              .replace(/ very /g, ' v ')
              .replace(/ going to /g, ' gonna ')
              .replace(/ got to /g, ' gotta ')
              .replace(/ want to /g, ' wanna ')
              .replace(/ How is /g, ' Hows ')
              .replace(/ Where is /g, ' Wherez ')
              .replace(/ Give me /g, ' Gimme ')
              .replace(/ Let me /g, ' Lemme ')
              .replace(/ night /g, ' nite ')
              .replace(/ right /g, ' rite ')
              .replace(/ might /g, ' mite ')
              .replace(/ some /g, ' sum ')
              .replace(/ come /g, ' cum ')
              .replace(/ give /g, ' giv ')
              .replace(/ love /g, ' luv ')
    }
}
