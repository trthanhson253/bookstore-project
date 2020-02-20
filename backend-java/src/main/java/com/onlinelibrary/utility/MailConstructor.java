package com.onlinelibrary.utility;

import com.onlinelibrary.entity.Order;
import com.onlinelibrary.entity.User;
import java.util.Locale;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Component
public class MailConstructor {
    @Autowired
    private Environment env;

    @Autowired
    private TemplateEngine templateEngine;

    public SimpleMailMessage welcomeNewUser(User user){
        String message="Dear "+user.getName() +",\n" +
                "\n" +
                "Welcome to our Online BookStore\n" +
                "!\n" +
                "\n" +
                "Be sure to sign in to your account" +
                " each time you visit our site to put yourself in the EXPRESS LANE for every purchase on our site" +
                ", check on the progress of your orders and get the latest updates.\n" +
                "\n" +
                "We all love a deal so be sure to also sign up for our emails to ensure you get the latest in promos, content, offers, exclusive subscriber deals etc. Sign up here >>\n" +
                " and get an offer in your inbox within a few hours!\n" +
                "\n" +
                "We hope you LOVE our site and come back often as we are always adding new and improved features that will take your experience to the next level!\n" +
                "\n" +
                "Cheers,\n" +
                "BookStore Demo";
        SimpleMailMessage email= new SimpleMailMessage();
        email.setTo(user.getEmail());
        email.setSubject("Welcome to Online BookStore");
        email.setText(message);
        email.setFrom(env.getProperty("support.email"));
        return email;
    }

    public SimpleMailMessage retrievePasswordEmail(User user, String password){
        String message="Dear "+user.getName() +",\n" +
                "\n" +
                "This is your new Password:" + password+
                "\n" +
                "\n" +
                "Your Username:" + user.getUsername()
                +
                "\n" +

                "After login with this new current password, you can change it to your own password !\n" +
                "\n" +
                "Cheers,\n" +
                "IT Team";
        SimpleMailMessage email= new SimpleMailMessage();
        email.setTo(user.getEmail());
        email.setSubject("Retrieve Your Password");
        email.setText(message);
        email.setFrom(env.getProperty("support.email"));
        return email;
    }

    public MimeMessagePreparator constructOrderConfirmationEmail (User user, Order order, Locale locale) {
        Context context = new Context();
        context.setVariable("order", order);
        context.setVariable("user", user);
        context.setVariable("cartItemList", order.getCartItemList());
        String text = templateEngine.process("orderConfirmationEmailTemplate", context);

        MimeMessagePreparator messagePreparator = new MimeMessagePreparator() {
            @Override
            public void prepare(MimeMessage mimeMessage) throws Exception {
                MimeMessageHelper email = new MimeMessageHelper(mimeMessage);
                email.setTo(user.getEmail());
                email.setSubject("Order Confirmation - "+order.getId());
                email.setText(text,true);
                email.setFrom(new InternetAddress("trthanhson253@gmail.com"));
            }
        };

        return messagePreparator;
    }
}
