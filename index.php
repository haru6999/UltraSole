<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>UltraSole</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
    <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- グラフがかけるAnyChart(ライブラリ) -->
    <script src="https://cdn.anychart.com/js/latest/anychart-bundle.min.js"></script>
    <script src="index.js"></script>
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
  </head>
  <body>
    <main>

        <!-- <script src="https://unpkg.com/vue"></script> -->

        <?php
            $data = "https://spreadsheets.google.com/feeds/list/1N1uLWdXUDFQOj0X7WlG-Sp-zcX9_XhQNn2D3xOEqADg/od6/public/values?alt=json";
            $json = file_get_contents($data);
            $json_decode = json_decode($json);

            $names = $json_decode->feed->entry;

            foreach ($names as $name) {
                echo $name->{'gsx$time'}->{'$t'};
                echo $name->{'gsx$value'}->{'$t'};
                echo ",";
            }
        ?>
        <!-- <div id="app">
          <h1>{{ message }}</h1>
          <div class="books">
        
            <div class="book" v-for="book in books">
              <div class="info">
                <div class="title"><i class="book icon"></i> {{book.time}}</div>
                <div class="review">{{book.value}}</div>
              </div>
              <div class="rate">
                <div class="ui statistics">
                  <div class="statistic">
                    <div class="value"><i class="star icon"></i> {{book.value}} </div>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div> -->
      

      <!-- シート１ -->
      <!-- <div class="seat" id="seat1">
        <div class="logo">
          <img src="image/logo.png">
        </div>
        <div class="coment">
          <p id="sendcoments">かかとから足をつけてみましょう</p>
          <p class="about">詳しく見る >></p>
        </div>
        <div class="footimage">
          <img src="image/lfoot1.png" class="foot lfoot lfoot1">
          <img src="image/rfoot1.png" class="foot rfoot rfoot1">
        </div>
      </div> -->
       
      <!-- シート２ -->
      <div class="seat" id="seat2">
        <div class="logo">
          <img src="image/logo.png">
        </div>
        <p class="subtitle">マイリスト</p>

        <div class="input">
          <input type="text" value="スニーカー" id="mylist">
          <input type="text" value="革靴">
          <input type="text" value="革靴２">
          <input type="text" value="＋" style="color:white;">
        </div>

        <div class="mylist2">
          <p>スニーカー</p>
          <i class="fas fa-angle-left" id="mylistBack"></i>
          <div class="footimage">
            <img src="image/lft1.png" class="foot lfoot tfoot lft1">
            <img src="image/lfb1.png" class="foot lfoot bfoot lfb1">
            <img src="image/rft1.png" class="foot rfoot tfoot rft1">
            <img src="image/rfb1.png" class="foot rfoot bfoot rfb1">
          </div>
          <div class="button2">
            <button id="henkou">変更</button>
            <button id="kettei">決定</button>
          </div>
        </div>
      </div>

      <!-- シート３ -->
      <div class="seat" id="seat3">
        <div class="logo">
          <img src="image/logo.png">
        </div>
        <p class="subtitle">重心測定</p>

        <div id="gravity1">
          <p class="senntaku">選択してください</p>
          <div class="footimage">
            <img src="image/lft2.png" class="foot lfoot tfoot lft2">
            <img src="image/lfb2.png" class="foot lfoot bfoot lfb2">
            <img src="image/rft2.png" class="foot rfoot tfoot rft2">
            <img src="image/rfb2.png" class="foot rfoot bfoot rfb2">
          </div>
        </div>

        <div id="gravity2">
            <p class="senntaku">2019.05.17(Fri)</p>
            <i class="fas fa-angle-left" id="mylistBack"></i>

            <!-- vue.js発動 -->
            <div id="container">

            </div>
        </div>
      </div>

    </main>
    <footer>
      <button id="left"><i class="fas fa-shoe-prints"></i></button><button id="center"><i class="fas fa-list"></i></button><button id="right"><i class="fas fa-chart-line"></i></button>
    </footer>
    
    
  </body>
</html>
