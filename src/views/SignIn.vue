<template>
    <div>
        <!-- <p>{{formData}}</p -->
          <p>Sign In  {{formData}}</p>
        <CRow class="mb-3">
            <CFormLabel for="staticEmail" class="col-sm-2 col-form-label">Email</CFormLabel>
            <div class="col-sm-10">
              <CFormInput type="email" id="staticEmail"  v-model="formData.email" />
            </div>
          </CRow>
          <CRow class="mb-3">
            <CFormLabel for="inputPassword" class="col-sm-2 col-form-label" >Password</CFormLabel>
            <div class="col-sm-10">
              <CFormInput type="password" id="inputPassword" v-model="formData.password" />
            </div>
          </CRow>
          <CButton @click="signin()" type="submit" color="success" variant="outline">Sign in</CButton>

          
       
    </div>

</template>
<script>
import { defineComponent, onMounted,reactive } from "vue";
import { createClient } from '@supabase/supabase-js'

export default defineComponent({
  name: 'FormsView',
  components: {
    
  },
 setup(){
  
  onMounted(()=>{
    // console.log("accessing variable",process.env.VUE_APP_SUPABASE_URL, process.env.VUE_APP_SUPABASE_KEY)
    console.log("forms page")
    // console.log(process.env.meta)
  })
  const formData = reactive({
    url:process.env.VUE_APP_SUPABASE_URL,
    key:process.env.VUE_APP_SUPABASE_KEY,
    email:"user@gmail.com",
    password:"Nagarjuna@123",
    user:null
  })
  const signin = async()=>{
    console.log("signupo")
    console.log("accessing variable",process.env.VUE_APP_SUPABASE_URL, process.env.VUE_APP_SUPABASE_KEY)
    console.log('sign in')
      const supabase = createClient(
        formData.url,
        formData.key
      )
    // const supabaseUrl = 'https://dlndssfkpiwmaoycebzh.supabase.co'
    //   const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsbmRzc2ZrcGl3bWFveWNlYnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3Mjk0NjcsImV4cCI6MTk5NzMwNTQ2N30.BJOIs88qZh92v9NbTNyF4nOZ3IkXuzZWyk56KitAaWI"
    //   const supabase = createClient(supabaseUrl, supabaseKey)
      console.log("supabase",supabase)
    //   const { data, error } = await supabase.auth.signInWithPassword( {email:formData.email,password: formData.password});
    const { data, error } = await supabase.auth.signInWithPassword( {email: formData.email,password: formData.password});

      console.log(data,error)
      if(data){
        formData.user=data
        formData.email=""
        formData.password=""
      }

 }
 return{
    signin, 
    formData
 }
 }
 
})
</script>