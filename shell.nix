with import (<nixpkgs>) {};

stdenv.mkDerivation {
  name = "bugzilla_vue";
  buildInputs = [
    nodejs-14_x
  ];
}
