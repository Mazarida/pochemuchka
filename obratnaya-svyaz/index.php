<?php include_once dirname(__FILE__)."/../header.php"; ?>
<div class="page__contacts">
    <section class="contacts__wrapper-bg">
        <div class="contacts__cloud" jparallax="5">обратная связь</div>
        <div class="fruit fruit_13 contacts__fruit_13 wow bounceIn" data-wow-delay="0.5s"></div>
        <div class="fruit fruit_14 contacts__fruit_14 wow bounceIn" data-wow-delay="0.8s"></div>
        <div class="fruit fruit_15 contacts__fruit_15 wow bounceIn" data-wow-delay="1s"></div>
        <div class="fruit fruit_16 contacts__fruit_16 wow bounceIn" data-wow-delay="1.1s"></div>
        <div class="fruit fruit_17 contacts__fruit_17 wow bounceIn" data-wow-delay="1.2s"></div>
        <div class="contacts__phrase" jparallax="1">Остались вопросы?!</div>
        <div class="contacts__sub-phrase" jparallax="3">
            <div class="contacts__form-she" jparallax="3"></div>
            Почемучка вам ответит!</div>
        <div class="feedback__form contacts__feedback-form-wrapper">
            <div class="contacts__she-hand" jparallax="19"></div>
            <form action="" class="form">
                <div class="form__group">
                    <input type="text" id="feedbackName" name="feedback-name">
                    <label for="feedbackName">Имя</label>
                    <span class="form__error">Некорректно заполнено поле</span>
                </div>
                <div class="form__group">
                    <input type="text" id="feedbackMail" name="feedback-mail">
                    <label for="feedbackMail">Email</label>
                    <span class="form__error">Некорректно заполнено поле</span>
                </div>
                <div class="form__group form__group_textarea">
                    <textarea id="feedbackTextarea" name="feedback-textarea"></textarea>
                    <label for="feedbackTextarea">Текст</label>
                    <span class="form__error">Некорректно заполнено поле</span>
                </div>
                <div class="form__group form__group_btn">
                    <button type="submit" class="btn-blue">отправить</button>
                </div>
            </form>
        </div>
        <div class="contacts__footer">
            <div class="catalog__footer-klubnika2 wow bounceIn"></div>
            <?php include dirname(__FILE__)."/../footer__sub.php"; ?>
        </div>
    </section>
</div>
<?php include_once dirname(__FILE__)."/../footer.php"; ?>