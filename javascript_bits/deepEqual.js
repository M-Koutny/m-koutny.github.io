function deepEqual(obj1,obj2)
{ if (obj1===obj2)
    {return true}
  else
    { let result=true
      if (obj1!=null && typeof obj1 == "object")
       {
         for (let key of Object.keys(obj1))
          {if(obj2[key])
             {result=deepEqual(obj1[key],obj2[key])}
           else {return false}
           if (!result)
             {return false}
          }
      return result
     }
     else 
      {return false}
    }
}
