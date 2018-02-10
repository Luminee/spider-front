 <template>
    <header>
        <ul class="nav">
            <li class="home"><icon name="dashboard"></icon>控制台</li>
            <li>
                <router-link :to="{path:'/module'}">模型模块</router-link>
            </li>
            <li>
                <router-link :to="{path:'/repo'}">仓储模块</router-link>
            </li>
            <li>
                <router-link :to="{path:'/service'}">服务模块</router-link>
            </li>
        </ul>
    </header>

</template>
      