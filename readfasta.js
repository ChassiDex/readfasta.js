function readFASTA(txt){
  lines = txt.split('\n');
  entries = [];
  entryText = '';
  entrySeq = '';
  for(i=0;i<lines.length;i++){
    if(lines[i][0] == ">"){
      if(i!=0){
        entry = new Object();
        entry.text = entryText;
        entry.sequence = entrySeq;
        entries.push(entry);
        entryText = '';
        entrySeq = '';
      }
      entryText = lines[i]
    }
    else{
      entrySeq += lines[i];
    }
  }
  entry = new Object();
  entry.text = entryText;
  entry.sequence = entrySeq;
  entries.push(entry);

  return entries
}
