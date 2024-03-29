import {extend} from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

export default function () {
    extend(LogInButtons.prototype, 'items', function (items) {
        items.add('ghostiq-flarumtelegram', LogInButton.component({
            className: 'Button LogInButton--telegram',
            icon: 'telegram',
            path: '/auth/telegram',
            children: app.translator.trans('ghostiq-flarumtelegram.forum.log_in_with_telegram_button'),
        }));
    });
}