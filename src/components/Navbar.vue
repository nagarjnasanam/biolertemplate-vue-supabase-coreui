<template>
    <div>
      
      
        <CNavbar expand="lg" color-scheme="light" class="bg-light">
            <CContainer fluid>
              <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
              <CCollapse class="navbar-collapse" :visible="visible">
                <CNavbarBrand href="#">Hidden brand</CNavbarBrand>
                <CNavbarNav class="me-auto mb-2 mb-lg-0">
                  <CNavItem>
                    <CNavLink href="/forms" active>
                      Forms
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="/signin">Sigin</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="/charts" >
                      Charts
                    </CNavLink>
                  </CNavItem>
                </CNavbarNav>
                <CForm class="d-flex">
                  <CFormInput type="search" class="me-2" placeholder="Search"/>
                  <CButton type="submit" color="success" variant="outline">Search</CButton>
                </CForm>
              </CCollapse>
            </CContainer>
          </CNavbar>
          
    </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: 'NavBar',
  components: {
    
  },
 setup(){
  
  onMounted(()=>{
    console.log("Nav component",)
  })
 }
})
</script>