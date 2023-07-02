// .WAP to rotate the string ‘brainmentors in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// input  = brainmentors
// output = sbrainmentor


function roatateString(){
    var str='brainmentors';
    var check =str;
    var c=check.length;                                                               \
    for(var i=0;i<c;i++){
    var last = check.charAt(c-1);
    var first = check.slice(0,c-1);
    var result=last.concat(first);
    check= result
    console.log(check);
    }
}

rotateString();

sbrainmentor
rsbrainmento
orsbrainment
torsbrainmen
ntorsbrainme
entorsbrainm
mentorsbrain
nmentorsbrai
inmentorsbra
ainmentorsbr
rainmentorsb
brainmentors