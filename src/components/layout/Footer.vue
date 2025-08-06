<template>
    <footer class="footer">
        <div class="footer-content">
            <img src="@/assets/images/logos/Logo_BOA_Plan_de_travail_1_cop.png" alt="Logo BOA"
                class="logo-image" />
        </div>

        <div class="footer-bottom">
            <p>&copy; {{ currentYear }} Vue App. {{ $t('footer.allRightsReserved', 'Tous droits réservés.') }}</p>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.footer {
    background: #1369b4;
    color: #fff;
    padding: 5rem 7.5rem;
    
    &-bottom {
        display: none;
        border-top: 1px solid #333;
        margin-top: 2rem;
        padding: 1rem 2rem 0;
        text-align: center;
        color: #999;
        
        @media (max-width: 768px) {
            padding: 1rem 1rem 0;
        }
    }
}
</style>
