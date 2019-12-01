<template>
     <div class="container">
        <div class="row">
            <div class="col">
                <h1>Add blog post</h1>
                <form @submit.prevent="isSubmitted = true">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" v-model="post.title">
                    </div>
                    <div class="form-group">
                        <label for="content">Conetnt</label>
                        <textarea class="form-control" id="content" v-model.lazy="post.content" cols="30" rows="10" />
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="post.publishImmediately" id="publish-immediately"/>
                        <label for="publish-immediately"> Publish Immediately</label>
                    </div>
                    <div class="form-group">
                        <label> Share on</label>
                        <div v-for="media in formData.socialMedia" v-bind:key="media">
                            <input type="checkbox" :id="media" :value="media" v-model="post.shareOn">
                            <label :for="media">{{ media }}</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Categories</label>
                        <div v-for="category in formData.categories" v-bind:key="category">
                            <input type="radio" :id="category" :value="category" v-model="post.category">
                            <label :for="category">{{ category }}</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Series</label>
                        <select class="form-control" id="select-series" v-model="post.series">
                            <option value="">Choose series</option>
                            <option v-for="series in formData.series" v-bind:key="series" :value="series">{{series}}</option>
                        </select>
                    </div>
                    <input type="submit" class="btn btn-primary" value="Publish">
                </form>
                <hr>
                <table class="table table-striped" v-if="isSubmitted">
                    <thead>
                        <tr>
                            <td class="col-xs-6">
                                <strong>Field</strong>
                            </td>
                            <td class="col-xs-6">
                                <strong>Value</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{{post.title}}</td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td style="white-space: pre;">{{post.content}}</td>
                        </tr>
                        <tr>
                            <td>Publish immediately</td>
                            <td>{{post.publishImmediately}}</td>
                        </tr>
                        <tr>
                            <td>Share On</td>
                            <td>
                                <ul>
                                    <li v-for="media in post.shareOn" v-bind:key="media">{{media}}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Series</td>
                            <td>{{post.series}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     </div>
</template>
<script src="./form-component.ts">
</script>