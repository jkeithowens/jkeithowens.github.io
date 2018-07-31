
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="pics/logo.png">

    <title>Sample Business</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

    <!-- <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    <link href="style.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="jumbotron.css" rel="stylesheet">
  </head>

  <body class ="bodybackground">

    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <img class="img-fluid" style = "max-height: 50px" src="pics/logo.png" alt="logo"/>
      <a class="navbar-brand" href="sampleIndex.html">Sample Business</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="sampleIndex.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="about.html">About Us</a>
              <a class="dropdown-item" href="cost.html">Locations</a>
              <a class="dropdown-item" href="faq.html">FAQ</a>
              <a class="dropdown-item" href="virtualtour.html">Request a Quote</a>
            </div>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="about.html">About </a>
          <li class="nav-item">
            <a class="nav-link" href="inspection.html">Home Inspections </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="contact.php">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="locations.html">Locations</a>
          </li>
        </ul>
      </div>
    </nav>


    <!-- Main jumbotron for a primary marketing message or call to action -->

      <!-- <div class="container containerinput" style="margin-top:75px">


        <p>Please Fill Out the info below and we will reply ASAP</p>


          <form action="#" id="form" method="post" name="form">

          <input name="fname" placeholder="First Name" type="text" value="">

          <input name="lname" placeholder="Last Name" type="text" value="">

          <input name="pnumber" placeholder="Phone Number" type="text" value="">

          <input name="vemail" placeholder="Email" type="text" value="">

          <select id="city" name="city">
            <option value="richmond">Richmond, IN</option>
            <option value="lebanon">Lebanon, IN</option>
          </select>

          <input name="sub" placeholder="Subject" type="text" value="">
          <textarea name="msg" placeholder="Please tell us a litte about what you are needing help with."></textarea>
          <input id="send" name="submit" type="submit" value="Send Feedback">
          </form>
          <h3><?php include "secure_email_code.php"?></h3> -->

          <div class="container containerinput" style="margin-top:75px">
            <!-- Feedback Form Starts Here -->
            <div id="feedback">
            <!-- Heading Of The Form -->
            <div class="head">
              <p>Please Fill Out the info below, and let us know how we can assist you.  We look forward to hearing from you!</p>

              <!-- Feedback Form Ends Here -->

                <form action="#" id="form" method="post" name="form">

                <input name="vname" placeholder="Your Name" type="text" value="">

                <input name="vemail" placeholder="Your Email" type="text" value="">

                <input name="pnumber" placeholder="Phone Number" type="text" value="">

                <input name="sub" placeholder="Subject" type="text" value="">
                <textarea name="msg" placeholder="Type your message here..."></textarea>
                <input id="send" name="submit" type="submit" value="Submit">
                </form>
                <h3><?php include "secure_email_code.php"?></h3>

            </div>
            <!-- Feedback Form Ends Here -->

            </div>

        </div>


    <div>
      <div class="spacing"></div>

            <div class="footer">
              <p>&copy; Sample Business 2018</p>
            </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="bootstrap/assets/js/vendor/popper.min.js"></script>
    <script src="bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="bootstrap/assets/js/ie10-viewport-bug-workaround.js"></script> -->
  </body>
</html>
