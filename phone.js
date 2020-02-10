<template>
  <div id="app">
    <div>
      <input v-model="form.name" type="text" class="form-control mt-3" placeholder="Name">
      <input v-model="form.lastname" type="text" class="form-control mt-3" placeholder="Lastname">
      <input v-model="form.phone" type="text" class="form-control mt-3" placeholder="Phone">
      <button v-on:click="send" class="btn btn-success">Save</button>
    </div>

    <div>
      <table class="table mt-3">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Phone Number</th>
          </tr>

        </thead>
        <tbody>
          <tr v-for="(item, index) of book">
            <td>{{index}}</td>
            <td>{{item.name}}</td>
            <td>{{item.lastname}}</td>
            <td>{{item.phone}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {},
      book: []
    };
  },
  methods: {
    send: function() {
      this.book.push({
        name: this.form.name,
        lastname: this.form.lastname,
        phone: this.form.phone
      });
      console.log(this.book);
      this.form = {}

    }
  }
};
</script>

<style lang="scss">
 .btn-success{
  background: #7AFF33;
  border-radius: 5px;
  color: white;
 }

 .table{
  margin-top: 10px;
  width: 100%;
  text-align: center;
  
 }

</style>