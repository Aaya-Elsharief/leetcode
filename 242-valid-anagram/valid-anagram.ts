function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) return false;
    let sMap = new Map<string, number>();
   for (let char of s){
        sMap.set(char, ((sMap.get(char)||0) + 1))
   }

    for (let char of t){
        
    if (!sMap.has(char)) return false;
    let count: number =  sMap.get(char)! - 1 ;
    if (count === 0) {
            sMap.delete(char);  
        } else {
            sMap.set(char, count);
        } 
    
   }
   
  return true;   
};