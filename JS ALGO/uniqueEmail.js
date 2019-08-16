// 929. Unique Email Addresses

const uniqueEmail=(emails)=>{
   const set = new Set()

   for(email of emails){
      const [, local, domain] = email.match(/(.*)@(.*)/);
      const user = local.replace(/\./g, '').replace(/\+.*/, '');
      const key = `${user}${domain}`
      set.add(key)
   }
   return set.size
}


console.log(uniqueEmail(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
))