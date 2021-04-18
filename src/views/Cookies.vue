<template>
  <div class="bg-yellow-200 h-screen">
    <h1 class="text-4xl pt-16 pb-16 text-center font-bold">Cookies</h1>
    

    <div class="container pl-72 text-2xl mb-16">
        <div class="cookie-container">
          <form @submit.prevent="submitForm">
            <base-card>
              <h2 class="heading pl-16 text-3xl mb-4 mt-4 font-bold">
                Add Cookies
              </h2>

              <label class="label" for="name">Cookie Name </label>

              <input
                class="input"
                :class="{ 'bg-red-50': invalidCookieNameInput }"
                id="name"
                type="text"
                v-model.trim="enteredCookieName"
                @blur="validateCookieName"
              />

              <p v-if="invalidNameInput" class="text-red-500">
                Please enter cookie name!
              </p>

              <label class="label" for="rarity"> Rarity </label>

              <input
                class="input"
                :class="{ 'bg-red-50': invalidRarityInput }"
                id="rarity"
                type="text"
                v-model.trim="enteredRarity"
                @blur="validateRarity"
              />

              <p v-if="invalidRarityInput" class="text-red-500">
                Please enter cookie's rarity!
              </p>

              <label class="label" for="gender"> Gender </label>

              <input
                class="input"
                :class="{ 'bg-red-50': invalidGenderInput }"
                id="gender"
                type="text"
                v-model.trim="enteredGender"
                @blur="validateGender"
              /> 

              <p v-if="invalidGenderInput" class="text-red-500">
                Please enter cookie's Gender!
              </p>

              <button class="btn bg-green-500 text-white py-2 px-4 rounded ml-8">Add</button>
            </base-card>
            
          </form>
        </div></div>

    <div class="pl-72 pr-72 text-2xl ">
    <ul v-for="cookies in listCookies" :key="cookies.id">
          <base-card>  
          <li> 
              Cookie Name :
              <span>{{ cookies.name }}</span> | Rarity : 
              <span> {{ cookies.rarity }}</span> | Gender :
              <span> {{ cookies.gender }}</span>
              <button @click="showData(cookies)" class="bg-green-500 m-1">
                <img src="../assets/edit.svg" alt="" />
              </button>
              <button @click="deleteCookie(cookies.id)" class="bg-red-500 m-1">
                <img src="../assets/delete.svg" alt="" />
              </button>
            </li> 
          </base-card>
          </ul>
      </div>
      
  </div>
</template>

<script>

export default {
  name: "ListCookies",
  data() {
    return {
      listCookies: [],
      url: "http://localhost:5000/listCookies",
      isEdit: false,
      editId: '',
      enteredCookieName: '',
      enteredRarity: '',
      enteredGender: '',
      invalidCookieNameInput: false,
      invalidRarityInput: false,
      invalidGenderInput: false,
    };
  },

  methods: {
    submitForm() {
      this.invalidCookieNameInput = this.enteredCookieName === '' ? true : false
      this.invalidRarityInput = this.enteredRarity === '' ? true : false
      this.invalidGenderInput = this.enteredGender === '' ? true : false
      console.log(`name value: ${this.enteredCookieName}`)
      console.log(`rarity value: ${this.enteredRarity}`)
      console.log(`gender value: ${this.enteredGender}`)
      console.log(`invalid name: ${this.invalidCookieNameInput}`)
      console.log(`invalid rarity: ${this.invalidRarityInput}`)
      console.log(`invalid gender: ${this.invalidGenderInput}`)
      if (this.enteredCookieName !== '' && this.enteredRarity !== '' && this.enteredGender !== '') {
        if (this.isEdit) {
          this.editCookie({
            id: this.editId,
            name: this.enteredCookieName,
            rarity: this.enteredRarity,
            gender: this.enteredGender
          })
        } else {
          this.addCookie({
            name: this.enteredCookieName,
            rarity: this.enteredRarity,
            gender: this.enteredGender
          })
        }
      }
      this.enteredCookieName = ''
      this.enteredRarity = ''
      this.enteredGender = ''
      
    },

    showData(oldCookie) {
      this.isEdit = true
      this.editId = oldCookie.id
      this.enteredCookieName = oldCookie.name
      this.enteredRarity = oldCookie.rarity
      this.enteredGender = oldCookie.gender
    },

    async editCookie(editingCookie) {
    
        const res = await fetch(`${this.url}/${editingCookie.id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name: editingCookie.name,
            rarity: editingCookie.rarity,
            gender: editingCookie.gender
          })
        })
        const data = await res.json()
        this.listCookies = this.listCookies.map((cookies) =>
          cookies.id === editingCookie.id
            ? { ...cookies, name: data.name, rarity: data.rarity, gender: data.gender }
            : cookies
        )
        this.isEdit = false
        this.editId = ''
        this.enteredCookieName = ''
        this.enteredRarity = ''
        this.enteredGender = ''
    },

    async getCookies() {
      const res = await fetch("http://localhost:5000/listCookies");
      const data = await res.json();
      return data;
    },

    async deleteCookie(deleteId) {
        await fetch(`${this.url}/${deleteId}`, {
          method: 'DELETE'
        })
        this.listCookies = this.listCookies.filter(
          (cookies) => cookies.id !== deleteId
        )
    },

    async addCookie(newCookie) {
        const res = await fetch(this.url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name: newCookie.name,
            rarity: newCookie.rarity,
            gender: newCookie.gender
          })
        })
        const data = await res.json()
        this.listCookies = [...this.listCookies, data]
      }
  },

  async created() {
    this.listCookies = await this.getCookies();
  }
} 
</script>

